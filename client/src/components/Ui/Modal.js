import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

//Utilisation du portail React pour créer une toile de fond afin d'éviter des balises div excessives lors du rendu de l'application React
const Backdrop = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.OnCloseCart}></div>
    </div>
  );
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const modalElements = document.getElementById("modal-overlay");

const Modal = (props) => {
  //Rendered the components above
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.OnCloseCart} />,
        modalElements
      )}

      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        modalElements
      )}
    </>
  );
};

export default Modal;
