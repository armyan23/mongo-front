import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Container, Typography } from "@mui/material";

import usePreviousList from "@/hooks/usePreviousList";
import { getAccountRequest } from "@/store/account/action";
import AuthenticationLayout from "@/layout/AuthenticationLayout";

const Account = () => {
  const dispatch = useDispatch();
  const { isGetAccountFailure, errorMessage } = useSelector(
    (state) => state.account
  );

  const [prevIsGetAccountFailure] = usePreviousList([isGetAccountFailure]);

  useEffect(() => {
    dispatch(getAccountRequest());
  }, []);

  useEffect(() => {
    if (isGetAccountFailure && prevIsGetAccountFailure === false) {
      toast.error(errorMessage);
    }
  }, [isGetAccountFailure]);

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
          Account
        </Typography>
      </Box>
    </Container>
  );
};

Account.getLayout = function getLayout(page) {
  return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default Account;
