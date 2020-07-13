import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import LoginForm from "../loginForm/loginForm";

export default function LoginBtn(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setAlertShow(false);
  };
  const handleShow = () => setShow(true);

  const [alert,setAlert] = useState("")

  const [alertShow, setAlertShow] = useState(false);
  const handleAlertClose = () => setAlertShow(false);
  const handleAlertShow = (err) => {
      setAlertShow(true);
      setAlert(err)

    }

  return (
    <>
      <Button variant="warning" className="ml-2" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm
            handleAlertClose={handleAlertClose}
            handleAlertShow={handleAlertShow}
            login={props.login}
            handleClose={handleClose}
          ></LoginForm>
        </Modal.Body>
        <Modal.Footer>
          <Alert variant="danger" show={alertShow}>
            Uh oh: {alert}
          </Alert>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
