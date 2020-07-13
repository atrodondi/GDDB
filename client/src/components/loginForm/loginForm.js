import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function LoginForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loginObj, setLoginObj] = useState({
    username: "",
    password: "",
    email: "",
  });
  //   handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginObj({ ...loginObj, [name]: value });
  };

  //   handle logging in
  const handleLogin = (event) => {
    event.preventDefault();
    API.loginUser(loginObj).then((res) => {
      console.log(res.data);
      if (res.data.error) {
        props.handleAlertShow(res.data.error);
      } else {
        clearForm();
        handleClose();
        props.login(true);
      }
    });
  };

  //   handle register
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(loginObj);
    API.createUser(loginObj).then((res) => {
      console.log(res.data);
      if (res.data.message) {
        clearForm();
        props.handleAlertShow(res.data.message);
      } else {
        clearForm();
        handleClose();
        props.login(true);
      }
    });
  };
  // clear form
  const clearForm = () => {
    setLoginObj({ username: "", password: "", email: "" });
  };

  const loginInput = () => {
    return (
      <>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={loginObj.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={loginObj.password}
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          className="mr-2"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button variant="primary" onClick={handleShow}>
          Don't have an account? Register Here!
        </Button>
      </>
    );
  };

  const regInput = () => {
    return (
      <>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={loginObj.email}
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={loginObj.username}
              placeholder="Username"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={loginObj.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            onClick={handleRegister}
          >
            Register
          </Button>
        </Form.Group>
      </>
    );
  };

  return (
    <>
      <Form>{show ? regInput() : loginInput()}</Form>
    </>
  );
}
