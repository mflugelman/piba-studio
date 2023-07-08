import { Box, Grid, Slide, Typography } from "@mui/material";
import InfoCard from "../components/InfoCard";
import innovativeSolutions from "../assets/cardsImages/innovativeSolutions.png";
import purposefulDesign from "../assets/cardsImages/purposefulDesign.png";
import collaborativePartnership from "../assets/cardsImages/collaborativePartnership.png";
import exceptionalResults from "../assets/cardsImages/exceptionalResults.png";
import DashTitle from "../components/DashTitle";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const timeout = 800;

const WorkWithUs = () => {
  const [visible, setVisible] = useState([false, false, false, false]);
  const { ref, inView } = useInView();

  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible([true, visible[1], visible[2], visible[3]]);
      }, timeout);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, visible[2], visible[3]]);
      }, timeout * 2);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, true, visible[3]]);
      }, timeout * 3);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, true, true]);
      }, timeout * 4);
    }
  }, [inView]);

  return (
    <Box ref={containerRef}>
      <Box mt={10} mb={6} mr={4}>
        <DashTitle dashPosition={"right"} color={"black"}>
          Why work with us?
        </DashTitle>
      </Box>
      <Box ref={ref}>
        <Grid container spacing={6} p={{ xs: 4, md: 16 }}>
          <Grid item sm={12} md={6}>
            <Grid container direction="column" spacing={4}>
              <Grid item ref={containerRef}>
                <Slide
                  direction="right"
                  in={visible[0]}
                  timeout={timeout}
                  container={containerRef.current}
                  mountOnEnter
                >
                  <Box>
                    <InfoCard
                      title={"Innovative Solutions"}
                      body={
                        "We pride ourselves on delivering innovative solutions that push boundaries and exceed expectations. With our forward-thinking approach and dedication to staying at the forefront of design trends and technologies, we can provide clients with fresh and cutting-edge solutions that set them apart from the competition."
                      }
                      color={"#CDDFF8"}
                      imageUrl={innovativeSolutions}
                      backgroundPosition="right"
                      backgroundPositionY={"bottom"}
                    />
                  </Box>
                </Slide>
              </Grid>
              <Grid item>
                <Slide
                  direction="right"
                  in={visible[2]}
                  timeout={timeout}
                  container={containerRef.current}
                  mountOnEnter
                >
                  <Box>
                    <InfoCard
                      title={"Purposeful Design"}
                      body={
                        "Our design philosophy is centered around purpose. We go beyond aesthetics to create designs that are strategically aligned with our clients' objectives and values. By understanding their target audience, we can craft meaningful and engaging experiences that resonate deeply, leaving a lasting impact on their customers."
                      }
                      color={"#F7C7C2"}
                      imageUrl={purposefulDesign}
                      backgroundPosition="right"
                      backgroundPositionY="top"
                    />
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box marginTop={{ xs: 0, md: 16 }}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Slide
                    direction="left"
                    in={visible[1]}
                    timeout={timeout}
                    container={containerRef.current}
                    mountOnEnter
                  >
                    <Box>
                      <InfoCard
                        color="#F7C2E5"
                        title={"Collaborative Partnership"}
                        body={
                          "We believe in fostering strong and collaborative partnerships with our clients. By actively involving our clients in the creative process, we ensure that their unique vision and goals are fully realized. Our open communication, attentive listening, and seamless teamwork make the journey enjoyable and result in solutions that truly reflect their brand identity."
                        }
                        imageUrl={collaborativePartnership}
                        backgroundPosition="left"
                        backgroundPositionY={"top"}
                      />
                    </Box>
                  </Slide>
                </Grid>
                <Grid item>
                  <Slide
                    direction="left"
                    in={visible[3]}
                    timeout={timeout}
                    container={containerRef.current}
                    mountOnEnter
                  >
                    <Box>
                      <InfoCard
                        color="#EBE7DA"
                        title={"Exceptional Results"}
                        body={
                          "We are committed to delivering exceptional results that drive tangible business outcomes for our clients. Through our meticulous attention to detail, meticulous quality control, and relentless pursuit of excellence, we ensure that every project is executed to the highest standards. Our goal is to help our clients achieve measurable success and realize the full potential of their brand in the digital realm."
                        }
                        imageUrl={exceptionalResults}
                        backgroundPosition="left"
                        backgroundPositionY={"bottom"}
                      />
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkWithUs;
