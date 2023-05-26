import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { initialValues, validationSchema } from "@/components/schema/register";
import usePreviousList from "@/hooks/usePreviousList";
import { signUpRequest } from "@/store/auth/action";
import { typeGender } from "@/utils/utils";
import AuthLayout from "layout/AuthLayout";
import CustomField from "@/components/form/CustomField";
import DateCustomField from "@/components/form/DateCustomField";
import PasswordCustomField from "@/components/form/PasswordCustomField";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // TODO: Add Register fields
  // name, email, password, dateOfBirthday, gender, photo
  const {
    isSignUpRequest,
    isSignUpSuccess,
    isSignUpFailure,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.auth);

  const [prevIsSignUpSuccess, prevIsSignUpFailure] = usePreviousList([
    isSignUpSuccess,
    isSignUpFailure,
  ]);

  useEffect(() => {
    if (isSignUpSuccess && prevIsSignUpSuccess === false) {
      toast.success(successMessage);
      router.push("/");
    } else if (isSignUpFailure && prevIsSignUpFailure === false) {
      toast.error(errorMessage);
    }
  }, [isSignUpSuccess, isSignUpFailure]);

  const onFinish = (values) => {
    delete values.confirmPassword;
    dispatch(signUpRequest(values));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" mb={2}>
          Sign up
        </Typography>
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
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomField
                    name={"email"}
                    label={"Email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errorTouched={touched.email}
                    error={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    name={"name"}
                    label={"Name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errorTouched={touched.name}
                    error={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DateCustomField
                    name="dateOfBirthday"
                    label="Birth date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirthday}
                    errorTouched={touched.dateOfBirthday}
                    error={errors.dateOfBirthday}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12} pt={1}>
                <FormControl
                  fullWidth
                  error={!!(errors.gender && touched.gender)}
                >
                  <InputLabel id="type-gender-select-label">Gender</InputLabel>
                  <Select
                    labelId="type-gender-select-label"
                    id="gender"
                    name="gender"
                    label="Gender"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                  >
                    {typeGender.map((item) => (
                      <MenuItem key={item.key} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.gender && touched.gender ? (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <LoadingButton
                loading={isSignUpRequest}
                type="submit"
                startIcon={<SendIcon />}
                fullWidth
                loadingPosition="start"
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
              >
                Sign Up
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
