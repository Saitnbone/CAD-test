import { Card } from "./Card";
import { data } from "../mocks/mocks";
import Grid2 from "@mui/material/Grid2";

export const CardsList = () => {
  return (
    <Grid2 container spacing={2}>
      {data.map((item) => (
        <Grid2 key={item.index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card title={item.title} description={item.description} />
        </Grid2>
      ))}
    </Grid2>
  );
};
