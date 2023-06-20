import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import logoSmall from "./../assets/logo-small.png";

function Header() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        setIsBannerVisible(true);
      } else {
        // Scrolling down
        setIsBannerVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Grid
      container
      sx={{
        height: 100,
        background: "linear-gradient(90deg, #FFFFFF 0%, #EDECEC 105.72%);",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.14);",
        padding: 4,
        zIndex: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        transform: `translateY(${isBannerVisible ? "0" : "-100%"})`,
        transition: "transform 0.5s",
        transitionTimingFunction: "ease-out", // Add a smooth transition timing function
      }}
    >
      <Grid item sm={1} display={"flex"} justifyContent={"flex-start"}>
        <Box component="img" src={logoSmall} />
      </Grid>
      <Grid item sm={1}>
        <Button>
          <Typography variant="button">Projects</Typography>
        </Button>
      </Grid>
      <Grid item sm={1}>
        <Button>
          <Typography variant="button">Services</Typography>
        </Button>
      </Grid>
      <Grid item sm={1}>
        <Button>
          <Typography variant="button">About Us</Typography>
        </Button>
      </Grid>
      <Grid item sm={1}>
        <Button>
          <Typography variant="button">Say hi!</Typography>
        </Button>
      </Grid>

      <Grid item sm={7} display={"flex"} justifyContent={"flex-end"}>
        <Button variant="outlined">
          <Typography variant="button" fontWeight={600} color={"primary"}>
            BOOK A CALL
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
