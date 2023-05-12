import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/Header.css";
import Cart from "../Pages/Cart";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Cart/>
      <Container>
        <Navbar.Brand href="#home">PlayStation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/hardware">Hardware</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            
            <div className="rightSide">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/cart"><i class="bi bi-bag-plus-fill"></i></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
