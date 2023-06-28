import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";

const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box pl={10} pt={10}>
        <DashTitle color="black" dashPosition="left">
          How we can help
        </DashTitle>
      </Box>
      <Wheel />
    </Box>
  );
};

export default Services;
