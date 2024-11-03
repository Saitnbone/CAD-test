import { Typography } from "@mui/material";
import { ContactForm } from "../components/Form";
import Box from "@mui/material/Box";

export const ContactPage: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        justifyContent: "center",
        marginBlockStart: "30px",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "clamp(3rem, 2.1549rem + 4.2254vw, 6rem)",
        }}
      >
        Only CTA on the page
      </Typography>
      <ContactForm />
    </Box>
  );
};
