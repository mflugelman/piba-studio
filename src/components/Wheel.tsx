import { Box, Fade, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import { text } from "stream/consumers";

const wheelRadius = 300;

const deegrees = [
  (2 * Math.PI) / 11,
  Math.PI / 11,
  0,
  (1 * Math.PI) / 11,
  (2 * Math.PI) / 11,
];

interface AnglesList {
  [key: string]: any;
}

const anglesList: AnglesList = {
  uxDesign: 0,
  uiDesign: 30,
  appDesign: 53,
  webDesign: 78,
  uxConsulting: 108,
};

const texts: AnglesList = {
  uxDesign:
    "Our team is dedicated to creating intuitive and enjoyable experiences for your customers. Our UX design process begins with extensive research to understand your users' needs and behaviors. We then create wireframes and prototypes to test and refine our ideas before moving on to full design and development.",
  uiDesign:
    "Our team of experts is dedicated to creating visually appealing and user-friendly interfaces for websites and mobile applications. We believe that a great design not only enhances the user experience but also improves the overall functionality of the product.",
  appDesign:
    "We specialize in designing high-quality mobile applications that are user-friendly and visually appealing. Our team of experienced designers will work closely with you to understand your vision and create a custom design that meets your needs.",
  webDesign:
    "We specialize in creating impactful web designs that elevate your online presence. Our team combines creativity, technical expertise, and industry best practices to design responsive and visually appealing websites. From wireframing to prototyping, we ensure that your website not only looks stunning but also performs flawlessly across various devices and browsers.",
  uxConsulting:
    "We specialize in providing user experience (UX) consulting services. Our team of experts is dedicated to helping businesses create digital products that are user-friendly, engaging, and easy to use. We offer a range of services, including UX research, design, and testing, to ensure that your product meets the needs and expectations of your target audience. ",
};

const buttonCoordinates = deegrees.map((deegree) => {
  return {
    x: (wheelRadius + 120) * Math.cos(deegree),
    y: (wheelRadius + 120) * Math.sin(deegree),
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
        <Grid
          item
          xs={6}
          sx={{ display: "flex", alignItems: "center", pl: 10 }}
        >
          <Box m={4} pl={4} borderLeft={1}>
            <Typography variant="body1" textAlign={"left"} fontWeight={300}>
              {texts[findKeyByValue(angle)]}
            </Typography>
          </Box>
        </Grid>
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
              onClick={() => handleClick(anglesList.uxDesign)}
              active={angle == anglesList.uxDesign}
            >
              UX Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.uiDesign)}
              active={angle == anglesList.uiDesign}
            >
              UI Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.appDesign)}
              active={angle == anglesList.appDesign}
            >
              App Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.webDesign)}
              active={angle == anglesList.webDesign}
            >
              Web Design
            </HighlightedButton>
            <HighlightedButton
              circleLocationProps={buttonLocations}
              onClick={() => handleClick(anglesList.uxConsulting)}
              active={angle == anglesList.uxConsulting}
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
