import React from "react";
import Box from "@mui/material/Box";
import { Logo } from "./Logo";
import { ContactUs } from "./ContactUs";

export const Header: React.FC = () => {
  return (
    <Box component="header">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",

          alignItems: "center",
          padding: "30px 0",
        }}
      >
        <Logo />
        <ContactUs />
      </Box>
    </Box>
  );
};
