import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ConfirmMessage: React.FC = () => {
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
        Message generated on the server
      </Typography>
    </Box>
  );
};
