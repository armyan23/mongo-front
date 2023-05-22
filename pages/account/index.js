import React from "react";
import { Box } from "@mui/material";

import Layout from "@/layout/Layout";

const Account = () => {
  return <Box>Account</Box>;
};

Account.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Account;
