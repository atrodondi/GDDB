import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Form, Button, Col } from "react-bootstrap";

export default function addCHIForm(props) {
  const [newDoor, setNewDoor] = useState({
    model: "",
    maker: "",
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
    url: "",
    images: [],
    warranty: "",
    windload: ""
  });

  const [newImages, setNewImages] = useState({
    image1: "",
    image2: "",
    image3: ""
  });

  //   handle input change
  const handleInputChange = event => {
    let { name, value } = event.target;
    setNewDoor({ ...newDoor, [name]: value });
  };

  // handle image input change
  const handleImgInput = event => {
    let { name, value } = event.target;
    setNewImages({ ...newImages, [name]: value });
  };

  // handle submit
  const handleSubmit = event => {
    event.preventDefault();
    newDoor.images = [newImages];
    console.log("NEW DOOR", newDoor);
    // API.createCHI(newDoor).then(res => {
    //   console.log(res);
    // });
    // clearForm();
    // props.handleClose();
  };

  //   clear form / state
  const clearForm = () => {
    setNewDoor({
      model: "",
      maker: "",
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
      url: "",
      images: [],
      warranty: "",
      windload: ""
    });
  };

  useEffect(() => {
    console.log("GET COOKIE LOG-->", props.getCookie());
  }, []);

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="newResourceTitle">
          <Form.Label>Model</Form.Label>
          <Form.Control
            name="model"
            type="title"
            value={newDoor.models}
            placeholder="model number or name..."
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="maker">
          <Form.Label>Maker</Form.Label>
          <Form.Control
            as="input"
            value={newDoor.maker}
            placeholder="CHI,Wayne Dalton,NWD,Clopay,Americana,etc.."
            name="maker"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="description">
        <Form.Label>Panel Style</Form.Label>
        <Form.Control as="select" name="rating" onChange={handleInputChange}>
          <option>....</option>
          <option>Full-View</option>
          <option>Carriage Overlay Steel</option>
          <option>Flush</option>
          <option>Carriage House Wood</option>
          <option>Traditional Wood</option>
          <option>Fiberglass</option>
          <option>Carriage Steel</option>
          <option>Classic Steel</option>
          <option>Modern</option>
          <option>Custom</option>
        </Form.Control>
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="maker">
          <Form.Label>Brochure Link</Form.Label>
          <Form.Control
            as="input"
            value={newDoor.familyBrochureLink}
            placeholder=""
            name="familyBrochureLink"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="maker">
          <Form.Label>Flyer Link</Form.Label>
          <Form.Control
            as="input"
            value={newDoor.modelFlyerLink}
            placeholder=""
            name="modelFlyerLink"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="maker">
          <Form.Label>Price</Form.Label>
          <Form.Control
            as="input"
            value={newDoor.price}
            placeholder="$$$..."
            name="price"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="maker">
          <Form.Label>R-Value</Form.Label>
          <Form.Control
            as="input"
            value={newDoor.rValue}
            placeholder=""
            name="rValue"
            onChange={handleInputChange}
          ></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="maker">
        <Form.Label>Construction Information</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.rtmConstruction}
          placeholder="section thickness, materials,layers"
          name="rtmConstruction"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="maker">
        <Form.Label>Insulation Type</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.rtmInsualtion}
          placeholder="polystyrene, polyurethane, non-insulated..."
          name="rtmInsulation"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="sectionMaterial">
        <Form.Label>Section Materal</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.sectionMaterial}
          placeholder="..."
          name="sectionMaterial"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="url">
        <Form.Label>Link To Website</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.url}
          placeholder=""
          name="url"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="image1">
        <Form.Label>Image 1 Link</Form.Label>
        <Form.Control
          as="input"
          value={newImages.image1}
          placeholder=""
          name="image1"
          onChange={handleImgInput}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="image2">
        <Form.Label>Image 2 Link</Form.Label>
        <Form.Control
          as="input"
          value={newImages.image2}
          placeholder=""
          name="image2"
          onChange={handleImgInput}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="image3">
        <Form.Label>Image 3 Link</Form.Label>
        <Form.Control
          as="input"
          value={newImages.image3}
          placeholder=""
          name="image3"
          onChange={handleImgInput}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="warranty">
        <Form.Label>Warranty</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.warranty}
          placeholder=""
          name="warranty"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="windload">
        <Form.Label>Windload</Form.Label>
        <Form.Control
          as="input"
          value={newDoor.windload}
          placeholder=""
          name="windload"
          onChange={handleInputChange}
        ></Form.Control>
      </Form.Group>

      <Button type="submit" variant="outline-success" onClick={handleSubmit}>
        Add New Door{" "}
      </Button>
    </Form>
  );
}
