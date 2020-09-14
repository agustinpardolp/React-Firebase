import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: var(--mainColor);
  a {
    color: var(--fontColor);
    text-decoration: none;
  }
`;

export { StyledFooter };
