import React from "react";
import { Button as Btn } from "react-bootstrap";

const Button = ({ icon, type, variant, disabled, label, onClick }) => {
  return (
    <>
      <Btn type={type} variant={variant} onClick={onClick} disabled={disabled}>
        {icon ? <span>&#x2B;</span> : null}
        {label}
      </Btn>
    </>
  );
};

export default Button;
