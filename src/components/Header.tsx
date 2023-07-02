import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import logoSmall from "./../assets/logo-small.png";
import HeaderButton from "./HeaderButton";
import "./../App.css";

type HeaderProps = {
  onButtonClick: (value: string) => void;
  activeButton: string;
};

function Header(props: HeaderProps) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeButton, setActiveButton] = useState(props.activeButton);

  const handleClick = (value: string) => {
    props.onButtonClick(value);
  };

  useEffect(() => {
    setActiveButton(props.activeButton); // Update activeButton state when props.activeButton changes
  }, [props.activeButton]);

  const centerButtonGrid = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

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
        background: "linear-gradient(90deg, #FFFFFF 0%, #EDECEC 100%);",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.14);",
        pr: 4,
        pl: 4,
        pt: 2,
        pb: 2,
        zIndex: 1,
        position: "fixed",
        top: 0,
        width: "100%",
        transform: `translateY(${isBannerVisible ? "0" : "-100%"})`,
        transition: "transform 0.5s",
        transitionTimingFunction: "ease-out", // Add a smooth transition timing function
      }}
    >
      <Grid
        item
        xs={12}
        sm={1}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Button
          disableElevation
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent", // Set the hover background color to transparent
              boxShadow: "none", // Remove the hover box shadow
            },
          }}
          onClick={() => {
            handleClick("home");
            setActiveButton("");
          }}
        >
          <img src={logoSmall} alt="Logo" />
        </Button>
      </Grid>
      <Grid item xs={3} sm={2} md={1} sx={centerButtonGrid}>
        <HeaderButton
          onClick={() => {
            handleClick("projects");
            setActiveButton("projects");
          }}
          active={activeButton == "projects"}
        >
          Projects
        </HeaderButton>
      </Grid>
      <Grid item xs={3} sm={2} md={1} sx={centerButtonGrid}>
        <HeaderButton
          onClick={() => {
            handleClick("services");
            setActiveButton("services");
          }}
          active={activeButton == "services"}
        >
          Services
        </HeaderButton>
      </Grid>
      <Grid item xs={3} sm={2} md={1} sx={centerButtonGrid}>
        <HeaderButton
          onClick={() => {
            handleClick("about-us");
            setActiveButton("about-us");
          }}
          active={activeButton == "about-us"}
        >
          About us
        </HeaderButton>
      </Grid>
      <Grid item xs={3} sm={2} md={1} sx={centerButtonGrid}>
        <HeaderButton
          onClick={() => {
            handleClick("say-hi");
            setActiveButton("say-hi");
          }}
          active={activeButton == "say-hi"}
        >
          Say hi!
        </HeaderButton>
      </Grid>
      <Grid
        item
        xs={12}
        sm={3}
        md={7}
        sx={{
          ...centerButtonGrid,
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
      >
        <Button
          variant="outlined"
          onClick={() =>
            window.open("https://calendly.com/hellopibastudio", "_blank")
          }
        >
          <Typography variant="button" fontWeight={600} color={"primary"}>
            BOOK A CALL
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
