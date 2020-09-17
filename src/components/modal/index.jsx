import React from "react";
import { Modal as BoostrapModal } from "react-bootstrap";
import { SCREEN_LABELS } from "../../constants";
import { StyledModal } from "./styled-components";
import ButtonGroup from "../ButtonGroup";

const Modal = ({ show, message, onHide, onConfirm, children, buttonType }) => {
  return (
    <StyledModal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className="modal fade"
      backdropClassName="background-ligth"
    >
      <BoostrapModal.Body>
        <h5>{message}</h5>
      </BoostrapModal.Body>
      {children && children}
      <BoostrapModal.Footer>
        <ButtonGroup
          onCancel={onHide}
          onConfirm={onConfirm}
          buttonType={"submit"}
          labelCancel={SCREEN_LABELS.modal.cancel}
          labelConfirm={SCREEN_LABELS.modal.confirm}
        />
      </BoostrapModal.Footer>
    </StyledModal>
  );
};

export default React.memo(Modal);
