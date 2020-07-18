import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";

export default function wizard(props) {
  return (
    <Jumbotron className="text-center">
      <h1>Welcome! Why are you replacing your garage door?</h1>
      <h3>If you answer a few questions, we can provide you with a couple options that fit your needs!</h3>
    </Jumbotron>
  );
}
