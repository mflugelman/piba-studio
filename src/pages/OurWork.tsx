import { Box } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import React from "react";

const OurWork: React.FC = () => {
  return (
    <Box
      sx={{ backgroundColor: "#181818", pr: 4, pl: 2, pt: 4, height: "100vh" }}
    >
      <DashTitle dashPosition="right" color="white">
        Our Work
      </DashTitle>
      <VerticalCarousel />
    </Box>
  );
};

export default OurWork;
