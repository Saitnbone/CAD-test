import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const VideoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        marginBlockStart: "30px",
        backgroundColor: "#adadad",
        padding: "20px",
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <div>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(2rem, 1.7183rem + 1.4085vw, 3rem)",
              }}
            >
              Самый-самый важный текст
            </Typography>

            <Box
              component="p"
              sx={{
                fontSize: "clamp(0.85rem, 0.7373rem + 0.5634vw, 1.25rem)",
              }}
            >
              Здесь написан какой-то очень интересный текст, хотя вряд ли кто то
              будет его читать, но все же, если кто-то прочитает, то пусть
              знает, что это просто текст, который не имеет никакого смысла :)
            </Box>
          </div>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", 
              overflow: "hidden",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
