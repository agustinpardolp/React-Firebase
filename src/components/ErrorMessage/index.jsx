import React from "react";
import styled from "styled-components";

const StyledError = styled.span`
  color: red;
  margin-top: 15px;
  font-size: 14px;
`;

const ErrorMessage = ({ errorMessage }) => {
  return <StyledError>{errorMessage && errorMessage}</StyledError>;
};
export default React.memo(ErrorMessage);
