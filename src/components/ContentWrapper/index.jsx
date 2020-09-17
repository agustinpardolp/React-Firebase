import React from "react";
import styled from "styled-components";
const StyledContentWrapper = styled.section`
  min-height: 100vh;
  background: ${(props) => props.backgroundColor && props.backgroundColor};
`;
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
