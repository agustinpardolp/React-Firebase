import styled from "styled-components";

const StyledUpdloadBar = styled.div`
  height: 10px;
  background: #dc4f4f;
  width: ${(props) => props.width && `${props.width}%`};
`;
export { StyledUpdloadBar };
