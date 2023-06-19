import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/ThisIsPibaImage.png";
const LetsTalk = () => {
  return (
    <Box
      sx={{
        background:
          "radial-gradient(126.38% 242.21% at 83.4% 91.45%, rgba(123, 159, 246, 0.27) 54.17%, rgba(207, 207, 207, 0.13) 94.42%, rgba(207, 207, 207, 0.42) 100%);",
        // transform: "rotate(-180deg)",
        p: 10,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" textAlign={"left"}>
            This was us. We are excited to hear about you, let’s explore your
            project
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontSize={50}
            fontWeight={600}
            textAlign={"left"}
            m={4}
          >
            Let's Talk!
          </Typography>
          <Button variant="contained">
            <Typography variant="body2" color="white.main">
              BOOK A CALL
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LetsTalk;
