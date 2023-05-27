import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import { Box, Grid } from "@mui/material";

import usePreviousList from "@/hooks/usePreviousList";
import { updatePasswordRequest } from "@/store/account/action";
import PasswordCustomField from "@/components/form/PasswordCustomField";

export const initialValues = {
  password: "",
  confirmPassword: "",
};

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const ChangePassword = () => {
  const dispatch = useDispatch();

  const {
    isUpdatePasswordRequest,
    isUpdatePasswordSuccess,
    isUpdatePasswordFailure,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.account);

  const [prevIsUpdatePasswordSuccess, prevIsUpdatePasswordFailure] =
    usePreviousList([isUpdatePasswordSuccess, isUpdatePasswordFailure]);

  useEffect(() => {
    if (isUpdatePasswordSuccess && prevIsUpdatePasswordSuccess === false) {
      toast.success(successMessage);
    } else if (
      isUpdatePasswordFailure &&
      prevIsUpdatePasswordFailure === false
    ) {
      toast.error(errorMessage);
    }
  }, [isUpdatePasswordSuccess, isUpdatePasswordFailure]);

  const onFinish = (values) => {
    dispatch(updatePasswordRequest({ password: values.password }));
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFinish}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} xl={7} lg={7}>
                <PasswordCustomField
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  errorTouched={touched.password}
                  error={errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={12} xl={7} lg={7}>
                <PasswordCustomField
                  name="confirmPassword"
                  label="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  errorTouched={touched.confirmPassword}
                  error={errors.confirmPassword}
                />
              </Grid>

              <Grid item xs={12} sm={12} xl={7} lg={7}>
                <LoadingButton
                  loading={isUpdatePasswordRequest}
                  type="submit"
                  startIcon={<SendIcon />}
                  fullWidth
                  loadingPosition="start"
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                >
                  Save password
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePassword;
