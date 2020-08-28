import React, { useState } from "react";
import Link from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import AddDoor from "../addDoor/addDoor";
import { FiHeart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import "./style.css";
import LoginBtn from "../loginBtn/loginBtn";
import API from "../../utils/API";

export default function navbar(props) {
  const [search, setSearch] = useState("");

  //   handle input change
  const handleSearchChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  // handle search btn press, yo!!
  const handleSearchBtn = event => {
    event.preventDefault();
    console.log(search);
    API.searchDoor(search).then(res => {
      console.log("response from door search: ", res);
      props.getCHI(res.data);
    });
  };

  // get all climbs
  const getAllCHI = () => {
    API.getAllCHI().then(res => {
      let doors = res.data;
      props.getCHI(doors);
    });
  };
  return (
    <>
      <Navbar fixed="top" className="navbar-light" expand="md">
        <Navbar.Brand href="#home">
          <p onClick={getAllCHI}> Garage Door DB</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <FormControl
                type="text"
                name="search"
                placeholder="Search"
                className=" mr-sm-2"
                autoComplete="off"
                value={search}
                onChange={handleSearchChange}
              />
              <Button type="submit" onClick={handleSearchBtn}>
                Search
              </Button>
            </Form>
            <Nav.Link href="/wizard">Wizard</Nav.Link>
            <Nav.Link href="#home">
              Home
              <div className="nav-item home">
                <AiOutlineHome />
              </div>
            </Nav.Link>

            <Nav.Link className="favorites" href="#favorite">
              Top Sellers
              <div className="nav-item heart">
                <FiHeart />
              </div>
            </Nav.Link>

            <AddDoor getCookie={props.getCookie}></AddDoor>
            {/* logout button */}
            {props.loggedIn ? (
              <Button variant="dark" onClick={props.logout}>
                Logout
              </Button>
            ) : (
              <LoginBtn login={props.login}></LoginBtn>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
