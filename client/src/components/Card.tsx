import Box from "@mui/material/Box";

interface ICard {
  title: string;
  description: string;
}

export const Card: React.FC<ICard> = ({ title, description }) => {
  return (
    <Box
      component="article"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  );
};
