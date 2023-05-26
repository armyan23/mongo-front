import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const CustomField = ({ name, errorTouched, error, ...rest }) => {
  return (
    <TextField
      {...rest}
      fullWidth
      id={name}
      name={name}
      helperText={error && errorTouched ? error : null}
      error={!!(error && errorTouched)}
    />
  );
};

CustomField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorTouched: PropTypes.bool,
  error: PropTypes.string,
};

export default CustomField;
