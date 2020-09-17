import styled from "styled-components";

const StyledUpdloadBar = styled.div`
  height: 5px;
  background: var(--backgroundProfile);
  width: ${(props) => props.width && props.width};
`;
export { StyledUpdloadBar };
