import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/ThisIsPibaImage.png";
import InfoCard from "../components/InfoCard";
const WorkWithUs = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Grid container p={15} spacing={6}>
        <Grid item sm={6}>
          <InfoCard
            title={"Innovative Solutions"}
            body={
              "We pride ourselves on delivering innovative solutions that push boundaries and exceed expectations. With our forward-thinking approach and dedication to staying at the forefront of design trends and technologies, we can provide clients with fresh and cutting-edge solutions that set them apart from the competition."
            }
            color={"#CDDFF8"}
          />
          <InfoCard
            title={"Purposeful Design"}
            body={
              "Our design philosophy is centered around purpose. We go beyond aesthetics to create designs that are strategically aligned with our clients' objectives and values. By understanding their target audience, we can craft meaningful and engaging experiences that resonate deeply, leaving a lasting impact on their customers."
            }
            color={"#F7C7C2"}
          />
        </Grid>
        <Grid item sm={6} mt={20}>
          <InfoCard
            color="#F7C2E5"
            title={"Collaborative Partnership"}
            body={
              "We believe in fostering strong and collaborative partnerships with our clients. By actively involving our clients in the creative process, we ensure that their unique vision and goals are fully realized. Our open communication, attentive listening, and seamless teamwork make the journey enjoyable and result in solutions that truly reflect their brand identity."
            }
          />
          <InfoCard
            color="#F7C2E5"
            title={"Exceptional Results"}
            body={
              "We are committed to delivering exceptional results that drive tangible business outcomes for our clients. Through our meticulous attention to detail, meticulous quality control, and relentless pursuit of excellence, we ensure that every project is executed to the highest standards. Our goal is to help our clients achieve measurable success and realize the full potential of their brand in the digital realm."
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkWithUs;
