import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import AuthMiddleware from "middlewares/AuthMiddleware";
import { Box, Button } from "@mui/material";

const AuthLayout = ({ children }) => {
  return (
    <AuthMiddleware>
      <Box display={"flex"} justifyContent={"end"} px={4} pt={2}>
        <Link href="/">
          <Button type="primary">Sign In</Button>
        </Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </Box>
      <Box>{children}</Box>
    </AuthMiddleware>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
