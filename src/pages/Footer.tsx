import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import PlantFooter from "./../assets/plantfooter.png";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        backgroundImage: `url(${PlantFooter})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        p: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" color="info.main" align="left">
          Say hi!
        </Typography>
        <Typography variant="body1" color="info.main" align="left">
          hellopibastudio@gmail.com
        </Typography>
        <Typography
          color="white.main"
          align="left"
          fontFamily="Lato"
          fontWeight={700}
          sx={{ fontSize: "16px !important" }}
        >
          BASED UK & IRELAND, WORKING WORLDWIDE
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Button>
          <Typography variant="buttonLinks">Instragram</Typography>
        </Button>
        <Button>
          <Typography variant="buttonLinks">Linkedin</Typography>
        </Button>
        <Button>
          <Typography variant="buttonLinks">Behance</Typography>
        </Button>
        <Button>
          <Typography variant="buttonLinks">Dribble</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
