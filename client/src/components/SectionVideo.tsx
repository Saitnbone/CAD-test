import Grid2 from "@mui/material/Grid2";
import Box from "@mui/material/Box";

export const VideoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        marginBlockStart: "30px",
        backgroundColor: "#adadad",
        padding: "40px",
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <div>
            <h1>Самый-самый важный текст</h1>
            <Box
              component="p"
              sx={{
                fontSize: "clamp(0.875rem, 0.7813rem + 0.4688vw, 1.25rem);",
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
              paddingTop: "56.25%", // Соотношение сторон 16:9
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
