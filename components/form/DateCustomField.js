import React from "react";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateCustomField = ({
  name,
  label,
  errorTouched,
  error,
  value,
  setFieldValue,
  ...rest
}) => {
  const handleChangeValues = (createdDate) => {
    setFieldValue(name, createdDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="dd/MM/yyyy"
        fullWidth
        id={name}
        value={value}
        sx={{ width: "100%" }}
        onChange={handleChangeValues}
        componentsProps={{
          input: {
            ...rest,
            value: value,
            variant: "outlined",
            error: !!(error && errorTouched),
          },
        }}
      />
      {error && errorTouched ? (
        <FormHelperText error>{error}</FormHelperText>
      ) : null}
    </LocalizationProvider>
  );
};

DateCustomField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  setFieldValue: PropTypes.func,
  errorTouched: PropTypes.any,
  error: PropTypes.string,
};

export default DateCustomField;
