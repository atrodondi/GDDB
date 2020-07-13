import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddClimbForm from "../addCHIForm/addCHIForm";

export default function AddClimb(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New CHI
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New CHI Door</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddClimbForm getCookie={props.getCookie} handleClose = {handleClose}></AddClimbForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
