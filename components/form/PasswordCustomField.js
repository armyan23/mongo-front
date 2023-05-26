import React from "react";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const PasswordCustomField = ({
  name,
  label,
  value,
  errorTouched,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name} error={!!(error && errorTouched)}>
        {label}
      </InputLabel>
      <OutlinedInput
        {...rest}
        id={name}
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        error={!!(error && errorTouched)}
      />
      {error && errorTouched ? (
        <FormHelperText error>{error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

PasswordCustomField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errorTouched: PropTypes.bool,
  error: PropTypes.string,
};

export default PasswordCustomField;
