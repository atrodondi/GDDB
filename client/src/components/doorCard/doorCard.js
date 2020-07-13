import React from "react";
import { Card, ListGroup, ListGroupItem, Carousel } from "react-bootstrap";
import "./style.css";

export default function doorCard(props) {
  return (
    <Card>
      <Card.Body>
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[0]}
              alt="First slide"
              style={{ height: "150px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[1]}
              alt="Second slide"
              style={{ height: "150px" }}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.images[2]}
              alt="Third slide"
              style={{ height: "150px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />

        <Card.Title>
          {" "}
          <strong>Model: </strong>
          {props.model}
          <strong style={{ float: "right" }}>{props.maker}</strong>
        </Card.Title>
        <Card.Text className="text-muted">{props.product_family}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <strong>Price:</strong> {props.price}
        </ListGroupItem>
        <ListGroupItem>
          <strong>R-Value:</strong> {props.r_value_text}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Insulation:</strong> {props.rtm_insulation_type}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Section Construction:</strong> {props.rtm_construction_type}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Section Material:</strong> {props.section_material}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link target="_blank" href={props.family_brochure_link}>
          Brochure
        </Card.Link>
        <Card.Link target="_blank" href={props.model_flyer_link}>
          Flyer
        </Card.Link>
        <Card.Link target="_blank" href={props.url}>
          Website
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
