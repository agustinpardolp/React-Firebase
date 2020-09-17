import React from "react";
import { StyledError } from "./styled-components";

const ErrorMessage = ({ errorMessage }) => {
  return <StyledError>{errorMessage && errorMessage}</StyledError>;
};
export default React.memo(ErrorMessage);
