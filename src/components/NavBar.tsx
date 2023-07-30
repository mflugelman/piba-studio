import "../styles.css";
import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import logoSmall from "./../assets/logo-small.png";
import HeaderButton from "./HeaderButton";
import "./../App.css";
import { useTranslation } from "react-i18next";
import React from "react";

type NavBarProps = {
  onButtonClick: (value: string) => void;
  activeButton: string;
};

function NavBar(props: NavBarProps) {
  const { t } = useTranslation("Header");

  const [activeButton, setActiveButton] = useState(props.activeButton);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleClick = (value: string) => {
    props.onButtonClick(value);
  };

  useEffect(() => {
    setActiveButton(props.activeButton);
  }, [props.activeButton]);

  const trigger = useScrollTrigger({
    target: window,
  });

  const sections = [
    { text: t("Projects"), action: "projects" },
    { text: t("Services"), action: "services" },
    { text: t("AboutUs"), action: "about-us" },
    { text: t("SayHi"), action: "say-hi" },
  ];

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const mobileNavBar = () => {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
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
            <img src={logoSmall} alt="Logo" width={32} />
          </Button>
          <IconButton onClick={handleOpenUserMenu}>
            <FilterListIcon />
          </IconButton>
        </Grid>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {sections.map((section) => (
            <MenuItem
              key={section.action}
              onClick={() => {
                handleCloseUserMenu();
                handleClick(section.action);
                setActiveButton(section.action);
              }}
            >
              <Typography textAlign="left" variant="button">
                {section.text}
              </Typography>
            </MenuItem>
          ))}
          <MenuItem
            onClick={() =>
              window.open("https://calendly.com/hellopibastudio", "_blank")
            }
          >
            <Typography textAlign="left" variant="button">
              {t("BookCallMobile")}
            </Typography>
          </MenuItem>
        </Menu>
      </Grid>
    );
  };

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={400}>
      <AppBar
        sx={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #EDECEC 100%);",
          boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.14);",
          width: "100%",
          p: 1,
          pl: 2,
          pr: 2,
        }}
      >
        <Toolbar disableGutters>
          {isMobile ? (
            mobileNavBar()
          ) : (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Button
                  disableElevation
                  disableRipple
                  onClick={() => {
                    handleClick("home");
                    setActiveButton("");
                  }}
                  sx={{
                    mr: 4,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img src={logoSmall} width={32} />
                </Button>
                {sections.map((section) => (
                  <HeaderButton
                    onClick={() => {
                      handleClick(section.action);
                      setActiveButton(section.action);
                    }}
                    active={activeButton == section.action}
                  >
                    {section.text}
                  </HeaderButton>
                ))}
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/hellopibastudio",
                      "_blank"
                    )
                  }
                >
                  <Typography
                    variant="button"
                    fontWeight={600}
                    color={"primary"}
                  >
                    {t("BookCall")}
                  </Typography>
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default NavBar;
