import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import AuthenticationMiddleware from "middlewares/AuthenticationMiddleware";

const AuthenticationLayout = ({ children }) => {
  return (
    <AuthenticationMiddleware>
      <Box display={"flex"} justifyContent={"end"} px={4} pt={2}>
        <Button>Logout</Button>
      </Box>
      <Box>{children}</Box>
    </AuthenticationMiddleware>
  );
};

AuthenticationLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthenticationLayout;
