import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Box, Card, Typography } from "@mui/material";
import Female from "@/public/images/gender/Female.jpg";
import Male from "@/public/images/gender/Male.jpg";

const PersonCard = ({ person }) => {
  return (
    <Card sx={{ padding: 3 }}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="personImg"
          src={
            person.photo
              ? person.photo
              : person.gender === "Female"
              ? Female.src
              : Male.src
          }
        />
      </Box>

      <Typography>Name: {person.name}</Typography>
      <Typography>
        Age: {moment().diff(person.dateOfBirthday, "years", false)}
      </Typography>
    </Card>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object,
};

export default PersonCard;
