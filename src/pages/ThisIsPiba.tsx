import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
  Fade,
} from "@mui/material";
import { useState, useEffect } from "react";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/thisispiba.png";
import ThisIsPibaMobile from "./../assets/thisIsPibaMobile.png";
import { useInView } from "react-intersection-observer";
import { Trans, useTranslation } from "react-i18next";

const ThisIsPiba: React.FC = () => {
  const { t } = useTranslation("ThisIsPiba");

  const timeout = 400;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const [visible, setVisible] = useState([false, false, false]);
  const { ref, inView } = useInView({
    threshold: 1,
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

  const typographyVariant = isMobile ? "body2" : "body1";

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
      }}
    >
      <img
        src={isMobile ? ThisIsPibaMobile : ThisIsPibaImage}
        alt="This is Piba"
        style={{
          width: "100%",
          objectFit: "cover",
          minHeight: isMobile ? "100%" : "auto",
          margin: isMobile ? "auto" : 0,
        }}
      />
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: isMobile
            ? "#EDECEC"
            : "linear-gradient(90deg, rgba(255, 255, 255, 0.62) 0%, #EDECEC 105.72%)",
          opacity: 0.8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container p={{ xs: 5, md: 10 }}>
          <Grid item md={8} xs={12}>
            <Box mb={6}>
              <DashTitle dashPosition="left" color="black">
                {t("ThisIsPiba")}
              </DashTitle>
            </Box>
            <Fade in={visible[0]} timeout={timeout}>
              <p>
                <Typography
                  variant={typographyVariant}
                  textAlign="left"
                  ref={ref}
                >
                  <Trans i18nKey="ThisIsPiba.Founded">{t("Founded")}</Trans>
                </Typography>
              </p>
            </Fade>
            <Fade in={visible[1]} timeout={timeout}>
              <p>
                <Typography variant={typographyVariant} textAlign="left">
                  {t("EnergyAndDedication")}
                </Typography>
              </p>
            </Fade>
            <Fade in={visible[2]} timeout={timeout}>
              <p>
                <Typography
                  variant={typographyVariant}
                  textAlign="left"
                  ref={ref}
                >
                  {t("BreakingBarriers")}
                </Typography>
              </p>
            </Fade>
          </Grid>
          <Grid item md={4} />
        </Grid>
      </Box>
    </Box>
  );
};

export default ThisIsPiba;
