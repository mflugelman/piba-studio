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
        <Typography variant="h3" color="white.main" align="left">
          Say hi!
        </Typography>
        <Typography variant="h6" color="white.main" align="left">
          hellopibastudio@gmail.com
        </Typography>
        <Typography variant="body2" color="white.main" align="left">
          Based UK & Ireland, working worldwide
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Button>
          <Typography variant="body2" color="white.main">
            Instragram
          </Typography>
        </Button>
        <Button>
          <Typography variant="body2" color="white.main">
            Linkedin
          </Typography>
        </Button>
        <Button>
          <Typography variant="body2" color="white.main">
            Behance
          </Typography>
        </Button>
        <Button>
          <Typography variant="body2" color="white.main">
            Dribble
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
