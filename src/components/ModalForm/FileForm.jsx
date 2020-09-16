import React, { useCallback, useState } from "react";
import Input from "../Input";

import ButtonGroup from "../ButtonGroup";
import { SCREEN_LABELS } from "../../constants";
import UploadBar from "../UploadBar";

import { StyledFormGroup, StyledLabel } from "./styled-components";
import { StyledModal } from "../Modal/styled-components";
import { Modal as BoostrapModal } from "react-bootstrap";

const FileForm = ({
  show,
  message,
  onHide,
  handleBlur,
  handleSubmit,
  values,
  errors,
  setFieldValue,
  setErrors,
  touched,
}) => {
  const [fileName, setFileName] = useState({ filename: "" });
  // const { url, error } = useStorage(null);

  const errorsFormHandler = useCallback(() => {
    return Object.entries(errors).length > 0;
  }, [errors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(values);
    onHide();
  };

  const handleFileChange = (e, setFieldValue, setErrors) => {
    if (e.target.files.length) {
      let file = e.target.files ? e.target.files[0].type.split("/")[1] : [];
      let filetypes = new RegExp("/|jpeg|png|/");
      let isValidtype = filetypes.test(file);

      if (isValidtype) {
        setFileName({
          [e.target.name]: e.target.files[0].name, //guardo valores locales para que se vea el nombre del archivo al cargar
        });
        setFieldValue([e.target.name], e.target.files[0]);
        //asigno los valores a la fn setFieldValue de Formik
      } else {
        setErrors({
          [e.target.name]: "Tipo inválido, solo JPG o PNG permitidos",
        }); //en su defecto error
        setFileName({
          [e.target.name]: " ",
        });
      }
    }
  };

  return (
    <StyledModal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal fade"
    >
      <BoostrapModal.Body>
        <h5>{message}</h5>
      </BoostrapModal.Body>
      <form className="form" onSubmit={handleFormSubmit}>
        <StyledFormGroup>
          <StyledLabel
            error={touched.filename && errors.filename}
            htmlFor={"filename"}
            variant="outline-success"
          >
            {" "}
            {"Cargar archivo"}{" "}
          </StyledLabel>
          <Input
            disableLabel={true}
            className="form-control"
            id="filename"
            name="filename"
            placeholder={SCREEN_LABELS.modal.input}
            type="file"
            style={{ display: "none" }}
            tabIndex="11"
            handleChange={(e) => handleFileChange(e, setFieldValue, setErrors)}
            handleBlur={handleBlur}
            errors={errors.filename}
          />
          <span>{fileName.filename}</span>
        </StyledFormGroup>
        <BoostrapModal.Footer>
          <ButtonGroup
            onCancel={onHide}
            buttonType={!errorsFormHandler() ? "submit" : "button"}
            disabled={errorsFormHandler()}
            labelCancel={SCREEN_LABELS.modal.cancel}
            labelConfirm={SCREEN_LABELS.modal.confirm}
          />
          {values.file && <UploadBar file={values.file} />}
        </BoostrapModal.Footer>
      </form>
    </StyledModal>
  );
};

export default FileForm;
