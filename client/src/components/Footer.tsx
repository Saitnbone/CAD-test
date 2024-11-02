import { Logo } from "./Logo";
import Box from "@mui/material/Box";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        padding: "30px",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
        marginBlockStart: "30px",
      }}
    >
      <Logo />
      <span>2024</span>
    </Box>
  );
};
