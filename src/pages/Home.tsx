import {
  Backdrop,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import pibaStudio from "./../assets/pibastudio.png";
import reel1 from "./../assets/reel1.png";
import backLeft from "./../assets/backImageLeft.png";
import HighlightedText from "../components/HighlightedText";

const Home = () => {
  const [open, setOpen] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const backDrop = () => {
    return (
      <>
        <Backdrop
          open={open}
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
            <img src={pibaStudio} alt="my image" width="100%" />
          </Box>
        </Backdrop>
      </>
    );
  };

  return (
    <Box marginTop={10}>
      <Box
        sx={{
          pl: { lg: 8, xs: 4 },
          display: "flex",
        }}
      >
        {!isSmallScreen ? (
          <Divider
            orientation="vertical"
            sx={{ marginLeft: 4, marginRight: 4, height: "80%" }}
          />
        ) : null}

        <Box>
          <Typography
            variant="h3"
            align="left"
            sx={{
              fontSize: {
                lg: 50,
                xs: 23,
              },
            }}
          >
            <b>
              meaningfull digital <br />
              experiences
            </b>{" "}
            through creative, <br /> purpose-driven design
          </Typography>
          <Grid container>
            <Grid item sm={6} sx={{ display: "flex", alignItems: "center" }}>
              <HighlightedText fontSize={24}>
                a bit of what we do
              </HighlightedText>
              <ArrowButton />
            </Grid>
            <Grid item sm={3} sx={{ padding: 0 }}>
              <img
                src={reel1}
                style={{ margin: 0, width: "100%", padding: 0 }}
              />
            </Grid>
            <Grid item sm={3}>
              <img src={reel1} width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* {backDrop()} */}
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
