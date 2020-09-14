import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const StyledNav = styled(Navbar)`
  height: 5rem;
  font-size: 1.1rem;
  .mr-auto {
    width: 100%;
    justify-content: center;
    a {
      margin-right: 5%;
    }
  }
  .dark {
    color: white;
  }
`;

export { StyledNav };
