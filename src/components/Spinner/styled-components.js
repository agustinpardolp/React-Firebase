import styled from "styled-components";

const StyledSpinner = styled.div`
  position: absolute;
  z-index: 1000;
  top: ${(props) => (props.positionY ? props.positionY : "40%")};
  left: ${(props) => (props.positionX ? props.positionX : "50%")};
  display: grid;
  grid-template-rows: 1fr 1fr;
  div {
    justify-self: center;
    margin-bottom: 5%;
  }
  span {
    font-size: 1rem;
    z-index: 2000;
    display: contents;
  }
`;

export { StyledSpinner };
