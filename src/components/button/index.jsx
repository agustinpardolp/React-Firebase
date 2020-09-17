import React from "react";
import { Button as Btn } from "react-bootstrap";

const Button = ({ type, variant, disabled, label, onClick }) => {
  return (
    <>
      <Btn type={type} variant={variant} onClick={onClick} disabled={disabled}>
        {label}
      </Btn>
    </>
  );
};

export default Button;
