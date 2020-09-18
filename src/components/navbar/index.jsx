import React from "react";
import { withRouter, Link } from "react-router-dom";
import { StyledNav } from "./styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { NAVBAR_TITLES, SCREEN_LABELS } from "../../constants";

const NavbarMenu = ({ location }) => {
  let { pathname } = location;

  return (
    <StyledNav bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/gallery">{SCREEN_LABELS.navbar.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NAVBAR_TITLES.map((label) => {
            return (
              <Link
                active={pathname.includes(label.path)}
                to={label.path}
                key={label.name}
              >
                {label.name}
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </StyledNav>
  );
};

export default withRouter(React.memo(NavbarMenu));
