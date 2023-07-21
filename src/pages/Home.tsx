import { Backdrop, Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pibaStudio from "./../assets/pibastudio.png";
import illusPiba from "./../assets/illusPiba.png";
import illusPibaRegular from "./../assets/illusPibaRegular.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Trans, useTranslation } from "react-i18next";
import RightIconButton from "../components/RightIconButton";
import ContentBox from "../components/ContentBox";

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
    <ContentBox>
      {backDrop()}
      <Box
        sx={{
          backgroundImage: {
            xl: `url(${illusPiba})`,
            xs: `url(${illusPibaRegular})`,
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
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
  );
};

export default Home;
