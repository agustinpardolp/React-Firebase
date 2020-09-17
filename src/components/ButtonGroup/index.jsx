import React from "react";
import Button from "../Button";
import { StyledButtonContainer } from "./styled-components";

const ButtonGroup = ({
  onCancel,
  onConfirm,
  buttonType,
  labelCancel,
  labelConfirm,
  disabled,
}) => {
  return (
    <StyledButtonContainer>
      <Button
        block
        onClick={onCancel}
        label={labelCancel}
        variant="outline-danger"
      />
      <Button
        block
        onClick={onConfirm}
        color="none"
        label={labelConfirm}
        variant={disabled ? "outline-secondary" : "outline-success"}
        type={buttonType}
        disabled={disabled}
      />
    </StyledButtonContainer>
  );
};

export default ButtonGroup;
