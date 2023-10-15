import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroTwoSection.module.css";
import hamimg from "../../assets/Icon/hamburger.svg";
import deliveryimg from "../../assets/Icon/delivery-man.svg";
import topimg from "../../assets/Icon/top-food.svg";

const HeroTwoSection = () => {
  return (
    <section id="why">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Why choose us</h2>
              <p>This is what makes us special</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_cards}>
          <Col
            lg={4}
            className={classes.first_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div className={`${classes.card_one} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={hamimg} alt="Hanmburger"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Easy to order</h5>
                  <p>
                  Order food with a single click, choose from a wide selection of dishes, and do it effortlessly and comfortably at any time{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={deliveryimg} alt="Delivery man"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>fast delivery</h5>
                  <p>
                  Enjoy fast and dependable food delivery, guaranteed to arrive at your specified time and location, any day, any time
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className={classes.last_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.card_three} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={topimg} alt="Thumbs up"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>100% quality</h5>
                  <p>
                  We offer high-quality food options for you and your loved ones,
                  promoting health, well-being, and more
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroTwoSection;
