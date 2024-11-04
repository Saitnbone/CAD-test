import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const ContactUs: React.FC = () => {
  return (
    <Link to="/contact">
      <Button
        sx={{
          fontSize: "clamp(0.725rem, 0.5546rem + 0.3521vw, 0.875rem)",
          textAlign: "center",
          paddingBlockStart: "5px",
          color: "#ffffff",
          backgroundColor: "#cdabe7",
        }}
      >
        Contact us
      </Button>
    </Link>
  );
};
