import React from "react";
import { StyledSpinner } from "./styled-components";

const Spinner = ({ message, positionY, positionX }) => {
  return (
    <StyledSpinner
      positionY={positionY}
      positionX={positionX}
      className="text-center"
    >
      <div className="spinner-border" role="status"></div>
      <span className="sr-only">{message && message}</span>
    </StyledSpinner>
  );
};
export default React.memo(Spinner);
