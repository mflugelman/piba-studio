import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Theme,
  Fade,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/thisispiba.png";
import { useInView } from "react-intersection-observer";

const ThisIsPiba: React.FC = () => {
  const timeout = 800;
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

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
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, visible[2]]);
      }, 1000);
    }
    if (inView) {
      setTimeout(() => {
        setVisible([true, true, true]);
      }, 1500);
    }
  }, [inView]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={ThisIsPibaImage}
        alt="This is Piba"
        style={{
          width: "100%",
          objectFit: "cover",
          minHeight: isMobile ? "100vh" : "auto",
          maxHeight: "100%",
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
        <Grid container p={{ xs: 2, md: 10 }}>
          <Grid item md={8} xs={12}>
            <Box>
              <DashTitle dashPosition="left" color="black">
                This is Piba
              </DashTitle>
            </Box>
            <Typography variant="body1" textAlign="left" ref={ref}>
              <Fade in={visible[0]} timeout={timeout}>
                <p>
                  Founded by two young professional women who started their
                  lives from scratch in a different country,{" "}
                  <strong>
                    our studio is fueled by the passion, creativity, and
                    resilience that come from overcoming obstacles and embracing
                    new challenges.
                  </strong>
                </p>
              </Fade>
              <Fade in={visible[1]} timeout={timeout}>
                <p>
                  We bring this same energy and dedication to our work, where we
                  use our diverse perspectives and experiences to create
                  innovative solutions that meet the needs of our clients and
                  their users.
                </p>
              </Fade>
              <Fade in={visible[2]} timeout={timeout}>
                <p>
                  We're proud to break barriers and set new standards for
                  excellence. With our commitment to quality and our passion for
                  design, we're excited to make a difference in the digital
                  world and beyond.
                </p>
              </Fade>
            </Typography>
          </Grid>
          <Grid md={4} />
        </Grid>
      </Box>
    </Box>
  );
};

export default ThisIsPiba;
