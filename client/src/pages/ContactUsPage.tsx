import React, { useState } from "react";
import { ContactForm } from "../components/Form";
import { ConfirmMessage } from "../components/ConfirmMessage";
import Box from "@mui/material/Box";

export const ContactPage: React.FC = () => {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleFormSubmit = (message: string) => {
    setServerMessage(message);
    setIsSubmitted(true);
  };

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
      {!isSubmitted ? (
        <ContactForm
          onSubmit={handleFormSubmit}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <ConfirmMessage message={serverMessage} />
      )}
    </Box>
  );
};
