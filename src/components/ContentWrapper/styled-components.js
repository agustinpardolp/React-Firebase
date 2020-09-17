import styled from "styled-components";
const StyledContentWrapper = styled.section`
  min-height: 100vh;
  background: ${(props) => props.backgroundColor && props.backgroundColor};
`;

export { StyledContentWrapper };
