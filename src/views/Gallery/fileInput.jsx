import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { SCREEN_LABELS } from "../../constants";
import { StyledFormGroup } from "./style-components";
import UploadBar from "../../components/UploadBar";

const FileInput = ({ errors, file, handleChange, setFile }) => {
  return (
    <StyledFormGroup>
      <Label
        errors={errors}
        htmlFor={"filename"}
        message={"Cargar archivo"}
        icon={true}
      ></Label>
      <Input
        disableLabel={true}
        className="form-control"
        id="filename"
        name="filename"
        placeholder={SCREEN_LABELS.modal.input}
        type="file"
        style={{ display: "none" }}
        tabIndex="11"
        handleChange={handleChange}
        errors={errors && errors}
      />
      {file && <UploadBar file={file} setFile={setFile} />}
    </StyledFormGroup>
  );
};

export default FileInput;
