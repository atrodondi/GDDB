import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddDoorForm from "../addDoorForm/addDoorForm";

export default function AddClimb(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Door
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Door</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddDoorForm
            getCookie={props.getCookie}
            handleClose={handleClose}
          ></AddDoorForm>
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
