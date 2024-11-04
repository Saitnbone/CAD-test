import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ConfirmMessageProps {
  message: string | null; 
}

export const ConfirmMessage: React.FC<ConfirmMessageProps> = ({ message }) => {
  return (
    <Box component="main">
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textAlign: "center",
          margin: "60px 0",
          fontWeight: "bold",
          fontSize: "clamp(3rem, 2.1549rem + 4.2254vw, 6rem)",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};
