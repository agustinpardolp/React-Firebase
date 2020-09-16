import styled from "styled-components";

const StyledFormGroup = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

const StyledLabel = styled.label`
  background: var(--backgroundProfile);
  ${(props) => (props.error ? "border: #f55757 solid 1px" : null)}
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid var(--backgroundProfile);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  :hover {
    background: var(--backgroundProfile);
    transition: 0.15s ease-in-out;
  }
`;

export { StyledFormGroup, StyledLabel };
