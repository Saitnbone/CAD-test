import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ContactUs } from "./ContactUs";

export const LessSection = () => {
  return (
    <Box
      component="section"
      sx={{
        marginBlockStart: "90px",
        backgroundColor: "#adadad",
        padding: "40px",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          margin: "60px 0",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily:
              "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Менее важный заголовок
        </Typography>
        <ContactUs />
      </Box>
    </Box>
  );
};
