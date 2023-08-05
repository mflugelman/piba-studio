import { Box, Typography, Fade } from "@mui/material";
import { useState, useEffect } from "react";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/thisispiba.png";
import ThisIsPibaMedium from "./../assets/thisIsPibaMd.png";
import ThisIsPibaMobile from "./../assets/thisIsPibaMobile.png";
import ThisIsPibaHuge from "./../assets/thisIsPibaHuge.png";
import { useInView } from "react-intersection-observer";
import { Trans, useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const ThisIsPiba: React.FC = () => {
  const { t } = useTranslation("ThisIsPiba");

  const timeout = 400;

  const [visible, setVisible] = useState([false, false, false]);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible([true, visible[1], visible[2]]);
      }, timeout);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, visible[2]]);
      }, timeout * 2);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, true]);
      }, timeout * 3);
    }
  }, [inView]);

  return (
    <Box
      sx={{
        pt: { sm: 10, md: 10, lg: 15 },
        pb: { sm: 10, md: 10, lg: 15 },
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        backgroundImage: {
          xs: `linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, #EDECEC 100%),url(${ThisIsPibaMobile}) `,
          md: `linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, #EDECEC 100%),url(${ThisIsPibaMedium}) `,
          lg: `linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, #EDECEC 100%), url(${ThisIsPibaImage}) `,
          xl: `linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, #EDECEC 100%),url(${ThisIsPibaHuge}) `,
        },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "100% 100%",
          xl: "100% 100%",
        },
      }}
    >
      <ContentBox>
        <Box
          sx={{
            pt: { xs: 8, md: 0 },
            pb: { xs: 8, md: 0 },
            pr: { xs: 4, md: 8 },
            pl: { xs: 4, md: 8 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <DashTitle dashPosition="left" color="black">
            {t("ThisIsPiba")}
          </DashTitle>
          <Box mt={6}>
            <Fade in={visible[0]} timeout={timeout}>
              <Typography variant={"body1"} textAlign="left" ref={ref}>
                <Trans i18nKey="ThisIsPiba.Founded">
                  {t("Founded")} <strong> {t("Fueled")}</strong>
                </Trans>
              </Typography>
            </Fade>
            <Fade in={visible[1]} timeout={timeout}>
              <Typography
                variant={"body1"}
                textAlign="left"
                mt={6}
                mr={{ xs: 0, md: 4 }}
              >
                {t("EnergyAndDedication")}
              </Typography>
            </Fade>
            <Fade in={visible[2]} timeout={timeout}>
              <Typography variant={"body1"} textAlign="left" mt={6}>
                {t("BreakingBarriers")}
              </Typography>
            </Fade>
          </Box>
        </Box>
      </ContentBox>
    </Box>
  );
};

export default ThisIsPiba;
