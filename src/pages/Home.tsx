import { Backdrop, Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pibaStudio from "./../assets/pibastudio.png";
import plantRight from "./../assets/plantRight.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const [backdropOpen, setBackdropOpen] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropOpen(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount or state change
  }, []);

  const backDrop = () => {
    return (
      <>
        <Backdrop
          open={backdropOpen}
          sx={{
            backgroundColor: "rgba(255, 255, 255,0.87)",
            zIndex: 1000,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            m={4}
          >
            <img src={pibaStudio} alt="Piba Studio" width="100%" />
          </Box>
        </Backdrop>
      </>
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${plantRight})`,
        width: "100%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Box
        sx={{
          p: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h1" align="left">
          Meaningfull digital <br />
          experiences through creative, <br />
          purpose-driven design
        </Typography>
        <Box mt={4}>
          <Button variant="contained">
            <Typography variant="button" fontWeight={500} color="white.main">
              LETS GET IN TOUCH
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "40px",
            height: "9px",
            backgroundColor: "secondary.main",
            m: 2,
          }}
        ></Box>
        <Typography m={1} variant="title">
          Scroll to explore
        </Typography>
        <IconButton
          sx={{
            m: 2,
            color: "black.main",
            outline: "2px solid",
            borderRadius: "46%",
          }}
          aria-label="upload picture"
          component="label"
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home;

{
  /* <Box pl={8}>
        <Box sx={{ borderLeft: 1, borderColor: "lightgray", pl: 8, pt: 8 }}>
          <Typography variant="h4" align="left" fontSize={50}>
            <strong>
              meaningfull digital <br /> experiences
            </strong>
            through creative, <br /> purpose-driven design
          </Typography>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 4 }}>
            <Grid item xs={6} display="flex">
              <HighlightedText fontSize={24}>
                a bit of what we do
              </HighlightedText>
              <ArrowButton />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex" }}>
              <Box>
                <img src={reel1} width="100%" />
              </Box>
              <Box>
                <img
                  src={reel1}
                  style={{ margin: 0, height: "100%", width: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box> */
}
