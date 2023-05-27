import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import { Box, Container, Grid, Typography } from "@mui/material";

import { initialValues, validationSchema } from "@/components/schema/login";
import usePreviousList from "@/hooks/usePreviousList";
import { signInRequest } from "@/store/auth/action";
import AuthLayout from "@/layout/AuthLayout";
import CustomField from "@/components/form/CustomField";
import PasswordCustomField from "@/components/form/PasswordCustomField";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isSignInRequest, isSignInSuccess, isSignInFailure, errorMessage } =
    useSelector((state) => state.auth);

  const [prevIsSignInSuccess, prevIsSignInFailure] = usePreviousList([
    isSignInSuccess,
    isSignInFailure,
  ]);

  useEffect(() => {
    if (isSignInSuccess && prevIsSignInSuccess === false) {
      router.push("/people");
    } else if (isSignInFailure && prevIsSignInFailure === false) {
      toast.error(errorMessage);
    }
  }, [isSignInSuccess, isSignInFailure]);

  const onFinish = (values) => {
    dispatch(signInRequest(values));
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
          Sign In
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
              </Grid>
              <LoadingButton
                loading={isSignInRequest}
                type="submit"
                startIcon={<SendIcon />}
                fullWidth
                loadingPosition="start"
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
              >
                Sign In
              </LoadingButton>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

Home.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Home;
