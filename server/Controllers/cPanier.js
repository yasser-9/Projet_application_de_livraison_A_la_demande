const Utilisateur = require("../models/Utilisateur");
const Produit = require("../models/Produit");
const Commande = require("../models/Commande");

// Confirmer la commande
const validerPanier = async (req, res) => {
  const user = await Utilisateur.findById(req.body.UtilisateurId);

  if (!user) {
    return res
      .status(400)
      .send(`Utulisateur avec id ${req.body.UtilisateurId} n'existe pas.`);
  }

  const listOfProducts = req.body.ListeProduits;

  // Vérifier la disponibilité des produits souhaités dans la base de données
  for (const {Titre, Quantite} of listOfProducts) {
    const prodInDb = await Produit.findOne({ Titre });

    if (prodInDb) {
      const quantityValid = prodInDb.Quantite >= Quantite;

      if (!quantityValid) {
        return res.status(400).send(`Pas assez de quantité disponible pour ${Titre} .`);
      }
    } else {
      return res.status(400).send(`Produit ${Titre} n'existe pas.`);
    }
  }

  // Si les produits sont disponibles, mettre à jour la quantité dans la base de données
  for (const { Titre, Quantite } of listOfProducts) {
    await Produit.updateOne({ Titre }, { $inc: { Quantite: -Quantite } });
  }

  // Créer une nouvelle commande
  const newOrder = new Commande({
    UtilisateurId: user._id,
    ListeProduits: listOfProducts,
  });

  // Sauvegarder la nouvelle commande dana la data
  try {
    await newOrder.save();
  } catch (error) {
    console.error("Error saving order:", error);
    return res.status(500).json(error);
  }

  return res.status(201).end();
};


// Valider la commande de l'utilisateur  par l'admin
const validerPanierParAdmin = async (req, res) => {
  const orderId = req.body.commandeId;
  const orderFromDb = await Commande.findById(orderId);
  if (orderFromDb === null) {
    return res
      .status(404)
      .send(`La commande avec l'id ${orderId} n'existe pas`);
  }
  const newOrderStatus = req.body.status;
  console.log("Statut de la nouvelle commande", newOrderStatus);
  await Commande.findByIdAndUpdate(orderId, {
    Valide: newOrderStatus,
  });

  return res.status(200).end();
};

module.exports = { getPanier, validerPanier, validerPanierParAdmin };
