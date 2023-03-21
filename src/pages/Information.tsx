import {
  Backdrop,
  Box,
  Button,
  Grid,
  keyframes,
  makeStyles,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import wheel from "./../assets/wheel.png";

const wheelRadius = 300;

const deegrees = [
  (2 * Math.PI) / 11,
  Math.PI / 11,
  0,
  (1 * Math.PI) / 11,
  (2 * Math.PI) / 11,
];

const buttonCoordinates = deegrees.map((deegree) => {
  return {
    x: (wheelRadius + 120) * Math.cos(deegree),
    y: (wheelRadius + 120) * Math.sin(deegree),
  };
});

const buttonStyle = {
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
  right: -wheelRadius,
};

const Information = () => {
  const [angle, setAngle] = useState(0);

  const handleClick = (newAngle: number) => {
    setAngle(newAngle);
    const degrees = -newAngle;
    const transform = `rotate(${degrees}deg)`;
    const wheel = document.getElementById("wheel");
    if (wheel) wheel.style.transform = transform;
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(126.38% 242.21% at 83.4% 91.45%, rgba(123, 159, 246, 0.27) 54.17%, rgba(207, 207, 207, 0.13) 94.42%, rgba(207, 207, 207, 0.42) 100%)",
      }}
    >
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={circleStyle}>
            <Box
              id={"wheel"}
              sx={{
                width: 600,
                height: 600,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            >
              <img src={wheel} width={550} height={550} />
            </Box>
            active={true}
            <HighlightedButton
              sx={buttonStyle}
              onClick={() => handleClick(0)}
              active={angle == 0}
            >
              UX Design
            </HighlightedButton>
            <HighlightedButton
              sx={buttonStyle}
              onClick={() => handleClick(30)}
              active={angle == 30}
            >
              UI Design
            </HighlightedButton>
            <HighlightedButton
              sx={buttonStyle}
              onClick={() => handleClick(53)}
              active={angle == 53}
            >
              App Design
            </HighlightedButton>
            <HighlightedButton
              sx={buttonStyle}
              onClick={() => handleClick(78)}
              active={angle == 78}
            >
              Web Design
            </HighlightedButton>
            <HighlightedButton
              sx={buttonStyle}
              onClick={() => handleClick(108)}
              active={angle == 108}
            >
              UX Consulting
            </HighlightedButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Information;
