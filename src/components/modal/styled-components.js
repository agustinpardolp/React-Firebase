import styled from "styled-components";
import { Modal as BoostrapModal } from "react-bootstrap";

const StyledModal = styled(BoostrapModal)`
  h5 {
    color: var(--mainColor);
    padding: 2%;
  }
  .show {
    opacity: 0.1 !important;
  }
`;
export { StyledModal };
