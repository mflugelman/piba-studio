import { Box, Button, Grid, Typography } from "@mui/material";
const LetsTalk = () => {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(126.38% 242.21% at 83.4% 91.45%, rgba(123, 159, 246, 0.27) 54.17%, rgba(207, 207, 207, 0.13) 94.42%, rgba(207, 207, 207, 0.42) 100%);",
        p: { xs: 4, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" textAlign={"left"}>
            This was us. <br />
            We are excited to hear about you, let’s explore your project
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h4" textAlign={"left"}>
            Let's Talk!
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              window.open("https://calendly.com/hellopibastudio", "_blank")
            }
          >
            <Typography variant="button" color="white.main">
              BOOK A CALL
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LetsTalk;
