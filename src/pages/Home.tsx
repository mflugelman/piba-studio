import { Backdrop, Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
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
        height: { xs: "80vh", md: "100vh" },
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        m: 2,
      }}
    >
      <Box />
      <Box
        sx={{
          pl: { xs: 4, md: 16 },
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
          <Button
            disableElevation
            variant="contained"
            onClick={() =>
              window.scrollTo({
                behavior: "smooth",
                top: document.documentElement.scrollHeight,
              })
            }
            sx={{
              boxShadow: "0px 0px 10px theme.primary.main",
              ":hover": {
                backgroundColor: "#F7C2E5B5",
                boxShadow: "0px 0px 10px 0px #F7C2E5B5",
              },
            }}
          >
            <Typography variant="button" color="white.main" m={1}>
              LETS GET IN TOUCH
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          m: 5,
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "9px",
            backgroundColor: "secondary.main",
            m: 2,
          }}
        ></Box>
        <Button
          disableElevation
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent", // Set the hover background color to transparent
              boxShadow: "none", // Remove the hover box shadow
            },
          }}
          onMouseEnter={handleAutoHover}
        >
          <Typography m={2} variant="body2">
            Scroll to explore
          </Typography>
          <IconButton
            sx={{
              m: 2,
              color: "black.main",
              outline: "2px solid",
              outlineColor: "black.main",
              borderRadius: "46%",
            }}
            aria-label="upload picture"
            component="label"
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
