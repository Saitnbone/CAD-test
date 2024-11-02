import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link to="/">
      <Box
        component="span"
        sx={{
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Some Company
      </Box>
    </Link>
  );
};
