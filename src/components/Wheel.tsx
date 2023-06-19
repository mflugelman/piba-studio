import { Box, Grid } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";

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
  right: -wheelRadius,
};

const Wheel = () => {
  const [angle, setAngle] = useState(0);

  const handleClick = (newAngle: number) => {
    setAngle(newAngle);
    const degrees = -newAngle;
    const transform = `rotate(${degrees}deg)`;
    const wheel = document.getElementById("wheel");
    if (wheel) wheel.style.transform = transform;
  };

  const ballAngle = (53 * Math.PI) / 180;
  const innerWHeelRadius = 275; // Half of the diameter

  const ballCoordinates = {
    x: innerWHeelRadius * Math.cos(ballAngle),
    y: innerWHeelRadius * Math.sin(ballAngle),
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        t: 6,
      }}
    >
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
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
                transition: "transform 0.5s ease",
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
              onClick={() => handleClick(0)}
              active={angle == 0}
            >
              UX Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(30)}
              active={angle == 30}
            >
              UI Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(53)}
              active={angle == 53}
            >
              App Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(78)}
              active={angle == 78}
            >
              Web Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
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

export default Wheel;
