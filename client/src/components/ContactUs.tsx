// import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const ContactUs: React.FC = () => {
  return (
    // <Link to="/contact">
    <Button
      sx={{
        fontSize: "clamp(0.625rem, 0.5546rem + 0.3521vw, 0.875rem)",
        textAlign: "center",
        paddingBlockStart: "5px",
      }}
    >
      Contact us
    </Button>
    // </Link>
  );
};
