import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }
}

let palette = {
  primary: {
    main: "#7B9FF6",
    light: "#AFBDE3",
  },
  info: {
    main: "#4F4F4F",
  },
  secondary: {
    main: "#D1F678",
  },
  black: {
    main: "#181818",
  },
  white: {
    main: "#FAFAFA",
  },
};

let theme = createTheme({
  palette: palette,

  typography: {
    fontFamily: ["Lato", "Poppins", "Oxygen", "sans-serif"].join(","),
    h1: {
      fontSize: 80,
      fontWeight: 300,
      color: palette.black.main,
    },
    h2: {
      fontSize: 72,
      fontWeight: 400,
      color: palette.white.main,
    },
    h3: {
      fontSize: 42,
      fontWeight: 400,
      color: palette.info.main,
    },
    h4: {
      fontWeight: 500,
      fontSize: 30,
      fontFamily: "Poppins",
      color: palette.white.main,
    },
    h5: {
      fontWeight: 300,
      fontSize: 60,
      fontFamily: "Lato",
      color: palette.black.main,
    },
    h6: {
      fontWeight: 500,
      fontSize: 24,
      fontFamily: "Poppins",
      color: palette.black.main,
    },
    body1: {
      fontWeight: 300,
      fontSize: 24,
      color: palette.black.main,
      fontFamily: "Poppins",
    },
    body2: {
      fontWeight: 300,
      fontSize: 18,
      color: palette.black.main,
      fontFamily: "Poppins",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontFamily: "Poppins",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export const themes = { theme };
