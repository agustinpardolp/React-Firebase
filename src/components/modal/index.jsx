import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import Input from "../Input";
import { SCREEN_LABELS } from "../../constants";
import Button from "../Button";
const StyledModal = styled(Modal)`
  h5 {
    color: var(--mainColor);
    padding: 2%;
  }
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  & button:first-child {
    margin-right: 5%;
  }
`;

function ModalContainer({
  show,
  isFullModal,
  message,
  onHide,
  onConfirm,
  hideButton,
  hiddeAllButtons,
  handleChange,
}) {
  return (
    <StyledModal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal fade"
    >
      <Modal.Body>
        <h5>{message}</h5>
      </Modal.Body>
      {isFullModal && (
        <form className="form" onSubmit={() => console.log("hola")}>
          <div className="form-group">
            <Input
              disableLabel={true}
              className="form-control"
              id="text"
              name="text"
              placeholder={SCREEN_LABELS.modal.input}
              type="file"
              // values={values.text}
              // touched={touched.text}
              // errors={errors.text}
              tabIndex="1"
              handleChange={handleChange}
              // handleBlur={handleBlur}
            />
          </div>
        </form>
      )}
      {hiddeAllButtons ? null : (
        <Modal.Footer>
          <StyledButtonContainer>
            <Button
              block
              onClick={onConfirm}
              color="none"
              label={SCREEN_LABELS.modal.confirm}
              type={"outline-danger"}
            />
            <Button
              block
              onClick={onHide}
              label={SCREEN_LABELS.modal.cancel}
              type={"outline-success"}
            />
          </StyledButtonContainer>
        </Modal.Footer>
      )}
    </StyledModal>
  );
}

export default React.memo(ModalContainer);
