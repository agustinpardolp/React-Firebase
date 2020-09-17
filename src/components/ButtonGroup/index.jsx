import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledButtonContainer = styled.div`
  width: 100%;
  & button:first-child {
    margin-right: 5%;
  }
`;

function ButtonGroup({
  onCancel,
  onConfirm,
  buttonType,
  labelCancel,
  labelConfirm,
  disabled,
}) {
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
}

export default ButtonGroup;
