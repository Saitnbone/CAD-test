import { VideoSection } from "../components/SectionVideo";
import { TitlesSection } from "../components/SectionTitles";
import Box from "@mui/material/Box";
import { LessSection } from "../components/SectionLess";

export const HomePage: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        marginBlockStart: "30px",
      }}
    >
      <VideoSection />
      <TitlesSection />
      <LessSection />
    </Box>
  );
};
