import React from "react";
import { withRouter } from "react-router-dom";
import { StyledNav } from "./styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { NAVBAR_TITLES, SCREEN_LABELS } from "../../constants";

const NavbarMenu = ({ location }) => {
  let { pathname } = location;

  return (
    <StyledNav bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">{SCREEN_LABELS.navbar.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NAVBAR_TITLES.map((label) => {
            return (
              <Nav.Link
                active={pathname.includes(label.path)}
                href={label.path}
              >
                {label.name}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </StyledNav>
  );
};

export default withRouter(NavbarMenu);
