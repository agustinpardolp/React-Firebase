import React from "react";
import { Button as Btn } from "react-bootstrap";

// StyledButton= styled

const Button = ({ type, label, onClick }) => {
  return (
    <Btn variant={type} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
