import { Backdrop, Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pibaStudio from "./../assets/pibastudio.png";
import illusPiba from "./../assets/illusPiba.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslation } from "react-i18next";
import RightIconButton from "../components/RightIconButton";

const Home = () => {
  const { t } = useTranslation("HomeScreen");
  const [backdropOpen, setBackdropOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropOpen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setBackdropOpen(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAutoScroll = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    const scrollStep = window.innerHeight;
    window.scrollBy(0, scrollStep);
  };

  const backDrop = () => {
    return (
      <>
        <Backdrop
          timeout={{ exit: 800 }}
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
      {backDrop()}
      <Box
        sx={{
          height: "100vh",
          pt: { xs: 20, md: 20 },
          pl: { xs: 3, md: 24 },
          pr: { xs: 3, md: 24 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Grid container spacing={2}>
          <Grid container item>
            <Grid item xs={12} md={10}>
              <Typography variant="h1" align="left">
                {t("MeaningfulExperiences")}
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
                {t("GetInTouch")}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Box
          mb={6}
          sx={{
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
          }}
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
            <RightIconButton
              onClick={handleAutoScroll}
              icon={ArrowDownwardIcon}
              color="black"
            >
              {t("ScrollToExplore")}
            </RightIconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
