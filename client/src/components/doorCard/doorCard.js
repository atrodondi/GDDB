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
          <strong>Rv:</strong> {props.r_value_text}
        </ListGroupItem>

        <ListGroupItem>
          <strong>Section Material:</strong> {props.section_material}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ul>
          <li>
            <Card.Link target="_blank" href={props.family_brochure_link}>
              Brochure
            </Card.Link>
          </li>
          <li>
            <Card.Link target="_blank" href={props.model_flyer_link}>
              Flyer Brochure
            </Card.Link>
          </li>
          <li>
            <Card.Link target="_blank" href={props.url}>
              Website
            </Card.Link>
          </li>
          <li>
            <Card.Link target="_blank" href={props.warranty}>
              Warranty
            </Card.Link>
          </li>
          <li>
            <Card.Link target="_blank" href={props.windload}>
              Windload
            </Card.Link>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}
