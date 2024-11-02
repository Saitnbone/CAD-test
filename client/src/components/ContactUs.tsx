import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const ContactUs: React.FC = () => {
  return (
    <Link to="/contact">
        <Button>Contact us</Button>
    </Link>
  );
};
