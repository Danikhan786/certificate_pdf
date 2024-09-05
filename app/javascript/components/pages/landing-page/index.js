import React, { useState } from "react";
import { Button, Modal, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import "./styles.scss";
import Stepper from "../../common-components/stepper";
import logo from "../../../../assets/images/logo.png";
import rightChevron from "../../../../assets/images/chevron-right-icon.svg";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="container custom-container">
        <div className="header">
          <a className="logo"
            href="/"
          >
            <img src={logo} alt="logo" />
          </a>
          <div className="pricing-wrapper">
            <Button onClick={() => setShowModal(!showModal)}>
              <img src={rightChevron} alt="" />
              Pricing
            </Button>
          </div>
        </div>
        <section className="stepper-section">
          <Stepper />
        </section>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header style={{ background: "#f83811", color: "#F8F8F8" }}>
          <Modal.Title>Pricing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroupItem>1 certificate $0.50</ListGroupItem>
            <ListGroupItem>2 certificates $0.45 per Certificate</ListGroupItem>
            <ListGroupItem>3 > 10 certificates $0.40 per Certificate</ListGroupItem>
            <ListGroupItem>11 > 25 certificates $0.35 per Certificate</ListGroupItem>
            <ListGroupItem>26 > 100 certificates $0.25 per Certificate</ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LandingPage;
