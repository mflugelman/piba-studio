import { Box, Fade, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import { useTranslation } from "react-i18next";

const deegrees = [
  (2 * Math.PI) / 11,
  Math.PI / 11,
  0,
  (1 * Math.PI) / 11,
  (2 * Math.PI) / 11,
];

interface AnglesList {
  [key: string]: { title: string; text: string };
}

const anglesList: { [key: string]: number } = {
  uxDesign: 0,
  uiDesign: 30,
  appDesign: 53,
  webDesign: 78,
  uxConsulting: 108,
};

const Wheel = () => {
  const { t } = useTranslation("Wheel");
  const [angle, setAngle] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const texts: AnglesList = {
    uxDesign: {
      title: t("UXDesign"),
      text: t("UXDesignText"),
    },
    uiDesign: {
      title: t("UIDesign"),
      text: t("UIDesignText"),
    },
    appDesign: {
      title: t("AppDesign"),
      text: t("AppDesignText"),
    },
    webDesign: {
      title: t("WebDesign"),
      text: t("WebDesignText"),
    },
    uxConsulting: {
      title: t("UXConsulting"),
      text: t("UXConsultingText"),
    },
  };

  const handleClick = (newAngle: number) => {
    setFade(false);
    const degrees = -newAngle;
    const transform = `rotate(${degrees}deg)`;
    const wheel = document.getElementById("wheel");
    if (wheel) wheel.style.transform = transform; // Start the fade-in effect
    setTimeout(() => {
      setFade(true);
      setAngle(newAngle);
    }, 250);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const wheelRadius = isMobile ? 200 : 280;

  const ballAngle = (53 * Math.PI) / 180;
  const innerWHeelRadius = wheelRadius - 25; // Half of the diameter

  const ballCoordinates = {
    x: innerWHeelRadius * Math.cos(ballAngle),
    y: innerWHeelRadius * Math.sin(ballAngle),
  };

  const buttonCoordinates = deegrees.map((deegree) => {
    return {
      x: (wheelRadius + wheelRadius * 0.4) * Math.cos(deegree),
      y: (wheelRadius + wheelRadius * 0.4) * Math.sin(deegree),
    };
  });

  const findKeyByValue = (value: number) => {
    for (const key in anglesList) {
      if (anglesList[key] === value) {
        return key;
      }
    }
    return "uxDesign"; // Return null if no matching key is found
  };

  const buttonLocations = {
    position: "absolute",
    margin: "auto",
    "&:nth-of-type(1)": {
      transform: `translate(-${buttonCoordinates[0].x}px, -${buttonCoordinates[0].y}px)`,
    },
    "&:nth-of-type(2)": {
      transform: `translate(-${buttonCoordinates[1].x}px, -${buttonCoordinates[1].y}px)`,
    },
    "&:nth-of-type(3)": {
      transform: `translate(-${buttonCoordinates[2].x}px, -${buttonCoordinates[2].y}px)`,
    },
    "&:nth-of-type(4)": {
      transform: `translate(-${buttonCoordinates[3].x}px, ${buttonCoordinates[3].y}px)`,
    },
    "&:nth-of-type(5)": {
      transform: `translate(-${buttonCoordinates[4].x}px, ${buttonCoordinates[4].y}px)`,
    },
  };

  const circleStyle = {
    width: wheelRadius * 2,
    height: wheelRadius * 2,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transform: `translateX(${isMobile ? wheelRadius * 0.8 : wheelRadius}px)`,
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Grid container sx={{ pb: 10, pt: 10 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            order: { xs: 1, md: 0 },
            p: { xs: 2, md: 10 },
          }}
        >
          <Fade in={fade} timeout={{ enter: 250, exit: 250 }}>
            <Box pl={4} borderLeft={1}>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign={"left"}
                fontWeight={300}
              >
                {texts[findKeyByValue(angle)].text}
              </Typography>
            </Box>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            order: { xs: 0, md: 2 },
            pb: 6,
          }}
        >
          <Box sx={circleStyle}>
            <Box
              id="wheel"
              sx={{
                width: 2 * wheelRadius - 50,
                height: 2 * wheelRadius - 50,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.6s ease",
                backgroundImage:
                  "linear-gradient(180deg, #7B9FF6 0%, #FFFFFF 100%)",
                boxShadow: "0px 79px 40px 50px rgba(0, 0, 0, 0.05)",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  position: "absolute",
                  top: -ballCoordinates.y + innerWHeelRadius - 20,
                  left: -ballCoordinates.x + innerWHeelRadius - 20,
                }}
              />
            </Box>

            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.uxDesign)}
              active={angle == anglesList.uxDesign}
            >
              {texts["uxDesign"].title}
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.uiDesign)}
              active={angle == anglesList.uiDesign}
            >
              {texts["uiDesign"].title}
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.appDesign)}
              active={angle == anglesList.appDesign}
            >
              {texts["appDesign"].title}
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.webDesign)}
              active={angle == anglesList.webDesign}
            >
              {texts["webDesign"].title}
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.uxConsulting)}
              active={angle == anglesList.uxConsulting}
            >
              {texts["uxConsulting"].title}
            </HighlightedButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wheel;
