import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { deletePhotoRequest, updatePhotoRequest } from "@/store/account/action";
import usePreviousList from "@/hooks/usePreviousList";
import Male from "@/public/images/gender/Male.jpg";
import Female from "@/public/images/gender/Female.jpg";
import AddIcon from "@mui/icons-material/Add";

const AccountImage = () => {
  const dispatch = useDispatch();

  const {
    isUpdatePhotoSuccess,
    isUpdatePhotoFailure,
    isDeletePhotoSuccess,
    isDeletePhotoFailure,
    account,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.account);

  const [
    prevIsUpdatePhotoSuccess,
    prevIsUpdatePhotoFailure,
    prevIsDeletePhotoSuccess,
    prevIsDeletePhotoFailure,
  ] = usePreviousList([
    isUpdatePhotoSuccess,
    isUpdatePhotoFailure,
    isDeletePhotoSuccess,
    isDeletePhotoFailure,
  ]);

  const [value, setValue] = useState();

  useEffect(() => {
    if (isUpdatePhotoSuccess && prevIsUpdatePhotoSuccess === false) {
      toast.success(successMessage);
      setValue("");
    } else if (isUpdatePhotoFailure && prevIsUpdatePhotoFailure === false) {
      toast.error(errorMessage);
    } else if (isDeletePhotoSuccess && prevIsDeletePhotoSuccess === false) {
      toast.success(successMessage);
    } else if (isDeletePhotoFailure && prevIsDeletePhotoFailure === false) {
      toast.error(errorMessage);
    }
  }, [
    isDeletePhotoSuccess,
    isDeletePhotoFailure,
    isUpdatePhotoSuccess,
    isUpdatePhotoFailure,
  ]);

  const handleDelete = () => {
    dispatch(deletePhotoRequest());
  };

  const handleAdd = () => {
    const data = new FormData();
    data.append("photo", value);

    dispatch(updatePhotoRequest(data));
  };

  return account.photo ? (
    <Box position={"relative"} width={400}>
      <img
        src={account.photo ? account.photo : undefined}
        alt="AccountImg"
        width={400}
      />
      <IconButton
        aria-label="delete"
        size="small"
        style={{ position: "absolute", right: -20, top: -20 }}
        onClick={handleDelete}
      >
        <ClearIcon sx={{ color: "red" }} />
      </IconButton>
    </Box>
  ) : (
    <>
      <Box position={"relative"} width={400}>
        <img
          src={
            value
              ? URL.createObjectURL(value)
              : account.gender === "Female"
              ? Female.src
              : Male.src
          }
          alt="ProfileImg"
          width={400}
        />

        {value ? (
          <IconButton
            aria-label="delete"
            size="small"
            style={{ position: "absolute", right: -20, top: -20 }}
            onClick={() => setValue()}
          >
            <ClearIcon sx={{ color: "red" }} />
          </IconButton>
        ) : null}
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={!value ? "column" : null}
        gap={3}
      >
        <Button component="label">
          Upload photo
          <AddIcon />
          <input
            type="file"
            name="photo"
            hidden
            onChange={(event) => setValue(event.target.files[0])}
          />
        </Button>
        {value ? <Button onClick={handleAdd}>Save</Button> : null}
      </Box>
    </>
  );
};

export default AccountImage;
