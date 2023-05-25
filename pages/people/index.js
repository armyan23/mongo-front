import React from "react";
import { Box } from "@mui/material";
import AuthenticationLayout from "layout/AuthenticationLayout";

const People = () => {
  return <Box>People</Box>;
};

People.getLayout = function getLayout(page) {
  return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default People;
