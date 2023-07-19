import "./../styles.css";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import PlantFooter from "./../assets/plantfooter.png";
import PlantFooterMobile from "./../assets/illusPibaFooterMobile.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation("Footer");

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${PlantFooterMobile})`,
            md: `url(${PlantFooter})`,
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: { xs: "left", md: "right" },
          display: "flex",
          justifyContent: "space-between",
          p: { xs: 2, md: 6 },
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={8} md={6} p={{ xs: 2 }}>
            <Typography variant="h5" color="info.main" align="left">
              {t("SayHi")}
            </Typography>
            <Link
              href="#"
              onClick={() => {
                window.location.href = `mailto: hellopibastudio@gmail.com`;
              }}
              underline="none"
            >
              <Typography variant="body1" color="info.main" align="left">
                hellopibastudio@gmail.com
              </Typography>
            </Link>
            <Typography
              color="white.main"
              align="left"
              fontFamily="Lato"
              fontWeight={700}
            >
              {t("Based")}
            </Typography>
          </Grid>
          <Grid item md={2} />
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              className="still-button"
              onClick={() =>
                handleButtonClick("https://www.instagram.com/studiopiba/")
              }
            >
              <Typography variant="buttonLinks">Instragram</Typography>
            </Button>
            <Button
              className="still-button"
              onClick={() =>
                handleButtonClick("https://www.linkedin.com/company/pibastudio")
              }
            >
              <Typography variant="buttonLinks">Linkedin</Typography>
            </Button>
            <Button
              className="still-button"
              onClick={() =>
                handleButtonClick(
                  "https://www.behance.net/pibastudio?locale=en_US"
                )
              }
            >
              <Typography variant="buttonLinks">Behance</Typography>
            </Button>
            <Button
              className="StillButton"
              onClick={() =>
                handleButtonClick("https://dribbble.com/piba-studio")
              }
            >
              <Typography variant="buttonLinks">Dribble</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
