import React from "react";
import AuthLayout from "layout/AuthLayout";

const Register = () => {
  return <>Register page</>;
};

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
