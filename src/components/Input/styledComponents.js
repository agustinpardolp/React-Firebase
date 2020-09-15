import styled from "styled-components";

const StyledInput = styled.input`
  ${(props) => (props.error ? "border: #f55757 solid 1px" : null)}
`;
const StyledLabel = styled.label`
  margin-left: 5%;
`;

export { StyledInput, StyledLabel };
