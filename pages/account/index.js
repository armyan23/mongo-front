import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Container, Grid, Typography } from "@mui/material";

import usePreviousList from "@/hooks/usePreviousList";
import { getAccountRequest } from "@/store/account/action";
import AuthenticationLayout from "@/layout/AuthenticationLayout";
import AccountImage from "@/components/account/AccountImage";
import AccountTabs from "@/components/account/AccountTabs";

const Account = () => {
  const dispatch = useDispatch();
  const { isGetAccountFailure, account, errorMessage } = useSelector(
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
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        mb={2}
      >
        <Typography component="h1" variant="h4" mb={2}>
          Account
        </Typography>
      </Box>
      {account ? (
        <Grid container spacing={3} justifyContent={"space-between"}>
          <Grid item xs={12} sm={7} xl={4} lg={4} sx={{ minWidth: 350 }}>
            <AccountImage url={account.photo} type={account.gender} />
          </Grid>
          <Grid item xs={12} sm={7} xl={7}>
            <AccountTabs />
          </Grid>
        </Grid>
      ) : (
        <>Loading</>
      )}
    </Container>
  );
};

Account.getLayout = function getLayout(page) {
  return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default Account;
