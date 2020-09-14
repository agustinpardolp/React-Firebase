import React from "react";
import { StyledFooter } from "./styled-components";
import { SCREEN_LABELS } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter bg="dark" variant="dark" expand="lg">
      <Link to="/gallery">{SCREEN_LABELS.footer.copyrigth}</Link>
    </StyledFooter>
  );
};

export default Footer;
