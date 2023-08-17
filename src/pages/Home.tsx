import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Trans, useTranslation } from "react-i18next";
import RightIconButton from "../components/RightIconButton";
import ContentBox from "../components/ContentBox";
import illusPiba from "./../assets/illusPiba.png";
import { useEffect, useState } from "react";

const Home = () => {
  const { t } = useTranslation("HomeScreen");

  const handleAutoScroll = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    const scrollStep = window.innerHeight * 0.9;
    window.scrollBy(0, scrollStep);
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Define a function to update the window size state
  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Attach the window resize listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: {
          md: `url(${illusPiba})`,
          xs: `url(${illusPiba})`,
        },
        backgroundSize: { xs: "160%", md: "90%", xl: "70%" },
        backgroundRepeat: "no-repeat",
        backgroundPositionX: {
          xs: `${windowSize.width * 0.2}px`,
          md: `${windowSize.width * 0.28}px`,
          xl: `${windowSize.width * 0.35}px`,
        },
        backgroundPositionY: { xs: "-50%", md: "120%", xl: "120%" },
      }}
    >
      <ContentBox>
        <Box
          sx={{
            height: "100%",

            pt: { xs: 20, md: 20 },
            pl: { xs: 4, md: 8 },
            pr: { xs: 4, md: 8 },
          }}
        >
          <Grid container>
            <Grid item>
              <Grid item xs={12} sm={11} md={10} lg={9}>
                <Typography variant="h1" align="left">
                  <Trans i18nKey="HomeScreen.MeaningfulExperiences">
                    {t("MeaningfulExperiences")}
                  </Trans>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 8,
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
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
                width: { xs: "80%", sm: "auto" },
                boxShadow: "0px 0px 10px theme.primary.main",
              }}
            >
              <Typography variant="button" color="white.main" m={1}>
                {t("GetInTouch")}
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              alignItems: "center",
              justifyContent: "center",
              pt: { xs: 20, md: 20 },
              mb: 8,
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
      </ContentBox>
    </Box>
  );
};

export default Home;
