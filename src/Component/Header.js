import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Nav className="ml-auto">
          <LinkContainer to='/cart'>
            <Nav.Link><i className="fas fa-shopping-cart "></i> Cart</Nav.Link>
          </LinkContainer>
          <LinkContainer to=''>
            <Nav.Link><i className="fas fa-user"></i> SIGNIN</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
