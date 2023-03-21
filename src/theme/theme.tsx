import { createTheme, responsiveFontSizes } from "@mui/material";

let palette = {
  primary: {
    main: "#AFBDE3",
  },
  info: {
    main: "#4F4F4F",
  },
};

let theme = createTheme({
  palette: palette,

  typography: {
    fontFamily: ["Oxygen", "sans-serif"].join(","),
    h1: {
      fontSize: 126,
      fontWeight: 700,
      color: "black",
    },
    h2: {
      fontSize: 70,
      fontWeight: 700,
      color: palette.primary.main,
    },
    h3: {
      fontWeight: 400,
      color: palette.info.main,
    },
    body1: {
      fontWeight: 300,
      fontSize: 24,
      color: "black",
    },
  },
});

theme = responsiveFontSizes(theme);

export const themes = { theme };
