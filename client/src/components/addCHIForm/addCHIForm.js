import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Form, Button } from "react-bootstrap";

export default function addCHIForm(props) {
  const [newCHI, setNewCHI] = useState({
    model: "",
    panelStyle: "",
    productFamily: "",
    doorStyleText: "",
    familyBrochureLink: "",
    modelFlyerLink: "",
    price: "",
    rValue: "",
    rtmConstruction: "",
    rtmInsulation: "",
    sectionMaterial: "",
  });

  //   handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCHI({ ...newCHI, [name]: value });
  };

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("NEW CLLIMB", newCHI);
    API.createCHI(newCHI).then((res) => {
      console.log(res);
    });
    clearForm();
    props.handleClose();
  };

  //   clear form / state
  const clearForm = () => {
    setNewCHI({
      model: "",
      panelStyle: "",
      productFamily: "",
      doorStyleText: "",
      familyBrochureLink: "",
      modelFlyerLink: "",
      price: "",
      rValue: "",
      rtmConstruction: "",
      rtmInsulation: "",
      sectionMaterial: "",
    });
  };

  useEffect(() => {
    console.log("GET COOKIE LOG-->", props.getCookie());
  }, []);

  return (
    <Form>
      <Form.Group controlId="newResourceTitle">
        <Form.Label>CHI Name</Form.Label>
        <Form.Control
          name="CHIName"
          type="title"
          value={newCHI.CHIName}
          placeholder="Name of CHI..."
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="newResourceLink">
        <Form.Label>Difficulty</Form.Label>
        <Form.Control
          as="input"
          value={newCHI.difficulty}
          placeholder="V0,V1,V2....or Red,Green,Black.."
          name="difficulty"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="tags">
        <Form.Label column sm={1}>
          Tags:
        </Form.Label>
        <Form.Control
          as="input"
          value={newCHI.tags}
          placeholder=""
          name="tags"
          onChange={handleInputChange}
        ></Form.Control>
        {/* <Col sm={3}>
        <Form.Check type="checkbox" label="#fun" id="fun" />
        <Form.Check type="checkbox" label="#burly" id="burly" />
        <Form.Check type="checkbox" label="#crimpy" id="crimpy" />
        <Form.Check type="checkbox" label="#heady" id="heady" />
        <Form.Check type="checkbox" label="#technical" id="technical" />
      </Col>
      <Col sm={3}>
        <Form.Check type="checkbox" label="#awful" id="awful" />
        <Form.Check type="checkbox" label="#cruiser" id="cruiser" />
        <Form.Check type="checkbox" label="#pinchy" id="pinchy" />
        <Form.Check type="checkbox" label="#scrunchy" id="scrunchy" />
        <Form.Check type="checkbox" label="#warm-up" id="warm-up" />
      </Col> */}
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Rating</Form.Label>
        <Form.Control as="select" name="rating" onChange={handleInputChange}>
          <option>....</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Button type="submit" variant="outline-success" onClick={handleSubmit}>
        Add New CHI{" "}
      </Button>
    </Form>
  );
}
