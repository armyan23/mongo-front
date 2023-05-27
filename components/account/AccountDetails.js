import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { updateNameRequest } from "@/store/account/action";
import usePreviousList from "@/hooks/usePreviousList";
import CakeIcon from "@mui/icons-material/Cake";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

const AccountDetails = () => {
  const dispatch = useDispatch();

  const {
    isUpdateNameSuccess,
    isUpdateNameFailure,
    account,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.account);

  const [prevIsUpdateNameSuccess, prevIsUpdateNameFailure] = usePreviousList([
    isUpdateNameSuccess,
    isUpdateNameFailure,
  ]);
  const [value, setValue] = React.useState(account.name);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setValue(account.name);
  }, [account]);

  useEffect(() => {
    if (isUpdateNameSuccess && prevIsUpdateNameSuccess === false) {
      toast.success(successMessage);
      setEditable(false);
    } else if (isUpdateNameFailure && prevIsUpdateNameFailure === false) {
      toast.error(errorMessage);
    }
  }, [isUpdateNameSuccess, isUpdateNameFailure]);

  const updateName = () => {
    if (value.length) {
      dispatch(updateNameRequest({ name: value }));
    }
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        alignContent={"start"}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          {editable ? (
            <>
              <TextField
                size={"small"}
                fullWidth
                id={"name"}
                name={"name"}
                label={"Name"}
                onChange={(e) => setValue(e.target.value)}
                defaultValue={value}
                helperText={!value ? "Please input your name" : null}
                error={!value}
              />
              <IconButton aria-label="delete" size="small" onClick={updateName}>
                <DoneIcon sx={{ color: "green" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                  setValue(account.name);
                  setEditable(false);
                }}
              >
                <ClearIcon sx={{ color: "red" }} />
              </IconButton>
            </>
          ) : (
            <>
              <ListItemText primary={account.name} />
              <Button
                size="small"
                startIcon={<EditIcon />}
                onClick={() => setEditable(true)}
              >
                Edit
              </Button>
            </>
          )}
        </ListItem>
      </Box>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={account.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {account.gender === "Female" ? <WomanIcon /> : <ManIcon />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={account.gender} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CakeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={moment(account.dateOfBirthday).format("DD/MM/yyyy")}
        />
      </ListItem>
    </List>
  );
};

export default AccountDetails;
