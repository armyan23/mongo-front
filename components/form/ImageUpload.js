import React from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

const ImageUpload = ({ name, value, setFieldValue }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"start"}
      flexDirection={"column"}
      gap={3}
    >
      <Button component="label">
        Upload photo
        <AddIcon />
        <input
          type="file"
          name="photo"
          hidden
          onChange={(event) => setFieldValue(name, event.target.files[0])}
        />
      </Button>

      {value && (
        <Box position={"relative"} width={250}>
          <img alt="not found" width="250px" src={URL.createObjectURL(value)} />
          <br />
          <IconButton
            aria-label="delete"
            size="small"
            style={{ position: "absolute", right: -20, top: -20 }}
            onClick={() => setFieldValue(name, "")}
          >
            <ClearIcon sx={{ color: "red" }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFieldValue: PropTypes.func,
};

export default ImageUpload;
