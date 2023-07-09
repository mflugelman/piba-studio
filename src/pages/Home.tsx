import {
  Backdrop,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import pibaStudio from "./../assets/pibastudio.png";
import illusPiba from "./../assets/illusPiba.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Home = () => {
  const [backdropOpen, setBackdropOpen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropOpen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAutoHover = () => {
    const scrollStep = window.innerHeight / 50; // Adjust the scroll step to control the smoothness

    const scroll = () => {
      if (window.pageYOffset < window.innerHeight) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    };

    scroll();
  };

  const backDrop = () => {
    return (
      <>
        <Backdrop
          timeout={{ exit: 1000 }}
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
            <img
              src={pibaStudio}
              alt="Piba Studio"
              width="100%"
              onClick={() => setBackdropOpen(false)}
            />
          </Box>
        </Backdrop>
      </>
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${illusPiba})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
      }}
    >
      {/* {backDrop()} */}
      <Box
        sx={{
          height: "100%",
          pt: { xs: 12, md: 20 },
          pl: { xs: 3, md: 24 },
          pr: { xs: 3, md: 24 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4}>
          <Grid container item>
            <Grid item xs={12} md={10}>
              <Typography variant="h1" align="left">
                Meaningfull digital <br /> experiences through creative,
                purpose-driven design
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", mt: { xs: 10, md: 2 } }}
          >
            <Button
              fullWidth
              disableElevation
              variant="contained"
              onClick={() =>
                window.scrollTo({
                  behavior: "smooth",
                  top: document.documentElement.scrollHeight,
                })
              }
              sx={{
                width: { xs: "100%", md: "auto" },
                boxShadow: "0px 0px 10px theme.primary.main",
              }}
            >
              <Typography variant="button" color="white.main" m={1}>
                LETS GET IN TOUCH
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box mt={20} mb={6}>
          <Grid
            container
            sx={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              disableElevation
              disableRipple
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  width: "auto",
                },
              }}
              onMouseEnter={handleAutoHover}
            >
              <Box
                sx={{
                  display: { md: "flex", xs: "block" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "0px", md: "40px" },
                    height: { xs: "0px", md: "9px" },
                    backgroundColor: "secondary.main",
                    alignSelf: "center",
                  }}
                />
                <Typography m={2} variant="body2">
                  Scroll to explore
                </Typography>
                <IconButton
                  sx={{
                    alignSelf: "center",
                    color: "black.main",
                    outline: "2px solid",
                    outlineColor: "black.main",
                    borderRadius: "46%",
                    marginTop: { xs: 1, md: 0 },
                  }}
                  component="label"
                >
                  <ArrowDownwardIcon />
                </IconButton>
              </Box>
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
