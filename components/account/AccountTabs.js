import React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import AccountDetails from "@/components/account/AccountDetails";

const AccountTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="1" />
            <Tab label="Change password" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>
          <AccountDetails />
        </TabPanel>
        <TabPanel value="2">Change password</TabPanel>
      </TabContext>
    </Box>
  );
};

export default AccountTabs;
