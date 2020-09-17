import React from "react";
import { StyledLabel } from "./styled-components";

const Label = ({ icon, errors, htmlFor, message }) => {
  return (
    <StyledLabel
      error={errors && errors.filename}
      htmlFor={htmlFor}
      variant="outline-success"
    >
      {icon && <>&#x2B;</>} {message}
    </StyledLabel>
  );
};

export default Label;
