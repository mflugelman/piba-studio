import { Box, Grid, Typography, useMediaQuery, Theme } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import ThisIsPibaImage from "./../assets/thisispiba.png";

const ThisIsPiba: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

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
        <Grid container p={{ xs: 4, md: 10 }}>
          <Grid item md={8} xs={12}>
            <DashTitle dashPosition="left" color="black">
              This is Piba
            </DashTitle>
            <Typography variant="body1" textAlign="left">
              <p>
                Founded by two young professional women who started their lives
                from scratch in a different country,{" "}
                <strong>
                  our studio is fueled by the passion, creativity, and
                  resilience that come from overcoming obstacles and embracing
                  new challenges.
                </strong>
              </p>
              <p>
                We bring this same energy and dedication to our work, where we
                use our diverse perspectives and experiences to create
                innovative solutions that meet the needs of our clients and
                their users.
              </p>
              <p>
                We're proud to break barriers and set new standards for
                excellence. With our commitment to quality and our passion for
                design, we're excited to make a difference in the digital world
                and beyond.
              </p>
            </Typography>
          </Grid>
          <Grid md={4} />
        </Grid>
      </Box>
    </Box>
  );
};

export default ThisIsPiba;
