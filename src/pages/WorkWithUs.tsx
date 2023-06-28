import { Box, Button, Grid, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/ThisIsPibaImage.png";
import InfoCard from "../components/InfoCard";
import { useInView } from "react-intersection-observer";
const WorkWithUs = () => {
  const [visible, setVisible] = useState([false, false, false]);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible([true, visible[1], visible[2]]);
      }, 500);
    }
    // if (inView) {
    //   setTimeout(() => {
    //     setVisible([true, true, visible[2]]);
    //   }, 1000);
    // }
    // if (inView) {
    //   setTimeout(() => {
    //     setVisible([true, true, true]);
    //   }, 1500);
    // }
  }, [inView]);

  console.log(inView);

  return (
    <Box>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sm={12} md={5}>
          <Slide direction="left" in={visible[0]} mountOnEnter unmountOnExit>
            <InfoCard
              title={"Innovative Solutions"}
              body={
                "We pride ourselves on delivering innovative solutions that push boundaries and exceed expectations. With our forward-thinking approach and dedication to staying at the forefront of design trends and technologies, we can provide clients with fresh and cutting-edge solutions that set them apart from the competition."
              }
              color={"#CDDFF8"}
            />
          </Slide>
          <InfoCard
            title={"Purposeful Design"}
            body={
              "Our design philosophy is centered around purpose. We go beyond aesthetics to create designs that are strategically aligned with our clients' objectives and values. By understanding their target audience, we can craft meaningful and engaging experiences that resonate deeply, leaving a lasting impact on their customers."
            }
            color={"#F7C7C2"}
          />
        </Grid>
        <Box ref={ref}></Box>
        <Grid item sm={12} md={5}>
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
