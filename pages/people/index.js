import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import AuthenticationLayout from "layout/AuthenticationLayout";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleRequest } from "@/store/people/action";
import PersonCard from "@/components/ui/cards/PersonCard";

const People = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getPeopleRequest());
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        {people.map((person) => {
          return (
            <Grid item xs={12} sm={4} lg={3} xl={2} key={person["_id"]}>
              <PersonCard person={person} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
People.getLayout = function getLayout(page) {
  return <AuthenticationLayout>{page}</AuthenticationLayout>;
};

export default People;
