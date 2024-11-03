import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

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
        <Link to="/contact">
          <Button color="inherit">Contact us</Button>
        </Link>
      </Box>
    </Box>
  );
};
