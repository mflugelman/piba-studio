import "../styles.css";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import PlantFooter from "./../assets/plantfooter.png";
const Footer = () => {
  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        backgroundImage: `url(${PlantFooter})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        display: "flex",
        justifyContent: "space-between",
        p: { xs: 2, md: 6 },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} p={{ xs: 2 }}>
          <Typography variant="h5" color="info.main" align="left">
            Say hi!
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
            sx={{ fontSize: "16px !important" }}
          >
            BASED UK & IRELAND, WORKING WORLDWIDE
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
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
          <Button className="still-button">
            <Typography variant="buttonLinks">Linkedin</Typography>
          </Button>
          <Button
            className="still-button"
            onClick={() =>
              handleButtonClick("https://dribbble.com/piba-studio")
            }
          >
            <Typography variant="buttonLinks">Behance</Typography>
          </Button>
          <Button
            className="StillButton"
            onClick={() =>
              handleButtonClick(
                "https://www.behance.net/pibastudio?locale=en_US"
              )
            }
          >
            <Typography variant="buttonLinks">Dribble</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
