import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import AuthenticationMiddleware from "middlewares/AuthenticationMiddleware";
import { logoutAction } from "config/instance";

const AuthenticationLayout = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    logoutAction();
    router.push("/");
  };

  return (
    <AuthenticationMiddleware>
      <Box display={"flex"} justifyContent={"space-between"} px={4} pt={2}>
        <div>
          <Link href="/people">
            <Button type="primary">People</Button>
          </Link>
        </div>
        <div>
          <Link href="/account">
            <Button type="primary">Account</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Box>
      <Box>{children}</Box>
    </AuthenticationMiddleware>
  );
};

AuthenticationLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthenticationLayout;
