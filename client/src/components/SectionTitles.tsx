import { Box, Grid2, Typography } from "@mui/material";
import { CardsList } from "./CardsList";
import { ContactUs } from "./ContactUs";

export const TitlesSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        marginBlockStart: "90px",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          fontSize: "clamp(1.45rem, 1.2246rem + 1.1268vw, 2.25rem)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Не менее важный второй заголовок
      </Typography>
      <Grid2
        container
        spacing={2}
        sx={{
          marginBlockStart: "40px",
        }}
      >
        <CardsList />
      </Grid2>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBlockStart: "15px",
        }}
      >
        <ContactUs />
      </Box>
    </Box>
  );
};
