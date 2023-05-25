import React from "react";
import { Box } from "@mui/material";
import AuthenticationLayout from "@/layout/AuthenticationLayout";

const Account = () => {
  return <Box>Account</Box>;
};

Account.getLayout = function getLayout(page) {
  return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default Account;
