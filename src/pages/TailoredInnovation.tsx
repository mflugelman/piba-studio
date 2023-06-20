import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/ThisIsPibaImage.png";
const TailoredInnovation = () => {
  return (
    <Box sx={{ backgroundColor: "black.main", p: 10 }}>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color={"white.main"} textAlign={"left"}>
            Tailored innovation for
            <br /> your success
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            color={"white.main"}
            textAlign={"left"}
            fontWeight={300}
          >
            We bring together creativity, technical expertise, and strategic
            thinking to develop innovative solutions that exceed our clients'
            expectations. We believe that every project is unique and requires a
            tailored approach to achieve the desired outcomes.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TailoredInnovation;
