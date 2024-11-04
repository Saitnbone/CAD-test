import { Typography } from "@mui/material";
import { ContactForm } from "../components/Form";
import Box from "@mui/material/Box";
import { useState } from "react";
import { ConfirmMessage } from "../components/ConfirmMessage";

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          fontSize: "clamp(2rem, 1.7183rem + 1.4085vw, 3rem)",
        }}
      >
        Only CTA on the page
      </Typography>
      {isSubmitted ? <ConfirmMessage/> : <ContactForm setIsSubmitted={setIsSubmitted}/>}
    </Box>
  );
};
