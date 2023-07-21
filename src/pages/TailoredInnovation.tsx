import { Box, Grid, Slide, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
const TailoredInnovation = () => {
  const { t } = useTranslation("TailoredInnovation");

  const timeout = 400;

  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "black.main",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <ContentBox>
          <Grid
            container
            spacing={2}
            sx={{ p: { xs: 4, md: 8 }, mt: 4, mb: 4 }}
            ref={containerRef}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Slide
                direction="right"
                in={visible}
                timeout={timeout}
                container={containerRef.current}
                mountOnEnter
              >
                <Box>
                  <Typography
                    variant="h5"
                    color={"white.main"}
                    textAlign="left"
                    fontWeight={"bold"}
                    fontSize={{ xs: "32px", md: "42px" }}
                  >
                    <Trans i18nKey="TailoredInnovation.TailoredInnovation">
                      {t("TailoredInnovation")}
                    </Trans>
                  </Typography>
                </Box>
              </Slide>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Slide
                direction="left"
                in={visible}
                timeout={timeout}
                container={containerRef.current}
                mountOnEnter
              >
                <Box>
                  <Typography
                    variant="body1"
                    color={"white.main"}
                    textAlign={"left"}
                  >
                    {t("CreativityAndExpertise")}
                  </Typography>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </ContentBox>
      </Box>
    </Box>
  );
};

export default TailoredInnovation;
