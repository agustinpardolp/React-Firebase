import React from "react";
import PropTypes from "prop-types";

import { StyledInput, StyledLabel } from "./styledComponents";
import ErrorMessage from "../ErrorMessage";

const Input = ({
  values,
  handleChange,
  handleClick,
  handleBlur,
  errors,
  touched,
  label,
  type,
  className,
  id,
  placeholder,
  name,
  tabIndex,
  disableErrors,
  disableLabel,
  style,
  checked,
}) => {
  return (
    <>
      {disableLabel ? null : (
        <StyledLabel htmlFor={id}>
          <b>{label}</b>
        </StyledLabel>
      )}

      <StyledInput
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        value={type === "file" ? "" : values}
        name={name}
        style={style}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        tabIndex={tabIndex}
        error={touched && errors}
        checked={checked}
      />
      {disableErrors ? null : (
        <ErrorMessage errorMessage={errors}></ErrorMessage>
      )}
    </>
  );
};
Input.defaultProps = {
  handleClick: () => {},
  handleBlur: () => {},
  label: "",
  className: "",
  id: "",
  placeholder: "",
  tabIndex: "",
  disableErrors: false,
  disableLabel: false,
  iconIsActive: false,
  iconClass: "",
  iconType: "",
  errors: "",
  values: null,
  style: {},
  touched: false,
};
Input.propTypes = {
  values: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
  disableErrors: PropTypes.bool,
  disableLabel: PropTypes.bool,
  style: PropTypes.object,
  iconIsActive: PropTypes.bool,
  iconClass: PropTypes.string,
  iconType: PropTypes.string,
};

export default React.memo(Input);
