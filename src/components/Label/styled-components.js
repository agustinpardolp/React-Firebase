import styled from "styled-components";

const StyledLabel = styled.label`
  ${(props) => (props.error ? "border: #f55757 solid 1px" : null)}
  display: inline-block;
  font-weight: 400;
  color: var(--buttonUpload);
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid var(--buttonUpload);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  :hover {
    background: var(--buttonUpload);
    transition: 0.15s ease-in-out;
    color: var(--fontColor);
  }
`;

export { StyledLabel };
