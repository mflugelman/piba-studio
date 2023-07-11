import "../styles.css";
import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import logoSmall from "./../assets/logo-small.png";
import HeaderButton from "./HeaderButton";
import "./../App.css";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  onButtonClick: (value: string) => void;
  activeButton: string;
};

function Header(props: HeaderProps) {
  const { t } = useTranslation("Header");

  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeButton, setActiveButton] = useState(props.activeButton);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleClick = (value: string) => {
    props.onButtonClick(value);
  };

  useEffect(() => {
    setActiveButton(props.activeButton);
  }, [props.activeButton]);

  const centerButtonGrid = {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", md: "center" },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < 100) {
        // Header is at the top, keep it visible
        setIsBannerVisible(true);
      } else if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        setIsBannerVisible(true);
      } else {
        // Scrolling down
        setIsBannerVisible(false);
      }

      setPrevScrollPos(currentScrollPos);

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      setHideTimeout(
        setTimeout(() => {
          if (currentScrollPos > 100) setIsBannerVisible(false);
        }, 2000)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [prevScrollPos, hideTimeout]);

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
        transitionTimingFunction: "ease-out",
      }}
      rowSpacing={2}
    >
      <Grid
        item
        sm={1}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Button
          disableElevation
          disableRipple
          className="still-button"
          onClick={() => {
            handleClick("home");
            setActiveButton("");
          }}
        >
          <img src={logoSmall} alt="Logo" />
        </Button>
      </Grid>
      <Grid item md={4} xs={12} sx={centerButtonGrid}>
        <HeaderButton
          onClick={() => {
            handleClick("projects");
            setActiveButton("projects");
          }}
          active={activeButton == "projects"}
        >
          {t("Projects")}
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            handleClick("services");
            setActiveButton("services");
          }}
          active={activeButton == "services"}
        >
          {t("Services")}
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            handleClick("about-us");
            setActiveButton("about-us");
          }}
          active={activeButton == "about-us"}
        >
          {t("AboutUs")}
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            handleClick("say-hi");
            setActiveButton("say-hi");
          }}
          active={activeButton == "say-hi"}
        >
          {t("SayHi")}
        </HeaderButton>
      </Grid>
      <Grid
        item
        md={7}
        xs={12}
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
            {t("BookCall")}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
