import { Box, Grid, Slide, Theme, useMediaQuery } from "@mui/material";
import InfoCard from "../components/InfoCard";
import innovativeSolutions from "../assets/cardsImages/innovativeSolutions.png";
import purposefulDesign from "../assets/cardsImages/purposefulDesign.png";
import collaborativePartnership from "../assets/cardsImages/collaborativePartnership.png";
import exceptionalResults from "../assets/cardsImages/exceptionalResults.png";
import DashTitle from "../components/DashTitle";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const timeout = 800;

const WorkWithUs = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const { t } = useTranslation("WorkWithUs");

  const [visible, setVisible] = useState([
    isMobile,
    isMobile,
    isMobile,
    isMobile,
  ]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const containerRef = useRef(null);
  const [showAnimations, setShowAnimations] = useState(isMobile);

  const information = [
    {
      title: t("InnovativeSolutions"),
      text: t("InnovativeSolutionsText"),
      color: "#CDDFF8",
      imageUrl: innovativeSolutions,
    },
    {
      title: t("CollaborativePartnership"),
      text: t("CollaborativePartnershipText"),
      color: "#F7C2E5",
      imageUrl: collaborativePartnership,
    },
    {
      title: t("PurposefulDesign"),
      text: t("PurposefulDesignText"),
      color: "#F7C7C2",
      imageUrl: purposefulDesign,
    },
    {
      title: t("ExceptionalResults"),
      text: t("ExceptionalResultsText"),
      color: "#EBE7DA",
      imageUrl: exceptionalResults,
    },
  ];

  useEffect(() => {
    if (showAnimations) {
      setTimeout(() => {
        setVisible((prev) => [true, prev[1], prev[2], prev[3]]);
      }, timeout);
    }
    if (showAnimations) {
      setTimeout(() => {
        setVisible((prev) => [true, true, prev[2], prev[3]]);
      }, timeout * 2);
    }
    if (showAnimations) {
      setTimeout(() => {
        setVisible((prev) => [true, true, true, prev[3]]);
      }, timeout * 3);
    }
    if (showAnimations) {
      setTimeout(() => {
        setVisible([true, true, true, true]);
      }, timeout * 4);
    }
  }, [showAnimations]);

  useEffect(() => {
    if (inView) setShowAnimations(true);
  }, [inView]);

  return (
    <ContentBox>
      <Box ref={containerRef} mt={{ xs: 8, md: 10 }} mb={{ xs: 8, md: 10 }}>
        <Box mt={{ xs: 8, md: 10 }} mb={{ xs: 8, md: 10 }}>
          <DashTitle dashPosition={"right"} color={"black"}>
            {t("WhyWorkWithUs")}
          </DashTitle>
        </Box>
        <Box ref={ref}>
          <Grid
            container
            spacing={6}
            sx={{ pr: { xs: 4, md: 16 }, pl: { xs: 4, md: 16 } }}
          >
            <Grid item sm={12} md={6}>
              <Grid container direction="column" spacing={4} ref={containerRef}>
                <Grid item>
                  <Slide
                    direction="right"
                    in={visible[0]}
                    timeout={timeout}
                    container={containerRef.current}
                  >
                    <Box>
                      <InfoCard
                        title={information[0].title}
                        body={information[0].text}
                        color={"#CDDFF8"}
                        imageUrl={information[0].imageUrl}
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
                        title={information[2].title}
                        body={information[2].text}
                        color={information[2].color}
                        imageUrl={information[2].imageUrl}
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
                          color={information[1].color}
                          title={information[1].title}
                          body={information[1].text}
                          imageUrl={information[1].imageUrl}
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
                          color={information[3].color}
                          title={information[3].title}
                          body={information[3].text}
                          imageUrl={information[3].imageUrl}
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
    </ContentBox>
  );
};

export default WorkWithUs;
