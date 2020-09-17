import React from "react";
import { StyledContentWrapper } from "./styled-components";

const ContentWrapper = ({ className, children, backgroundColor }) => {
  return (
    <StyledContentWrapper
      className={className}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
