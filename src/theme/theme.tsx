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

  interface TypographyVariants {
    title: React.CSSProperties;
    buttonLinks: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    buttonLinks?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    buttonLinks: true;
  }
}

let palette = {
  primary: {
    main: "#7B9FF6",
    light: "#AFBDE3",
  },
  info: {
    main: "#EBE7DA",
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
      fontFamily: "Lato",
    },
    h2: {
      fontSize: 72,
      fontWeight: 400,
      color: palette.white.main,
      fontFamily: "Lato",
    },
    h3: {
      fontSize: 60,
      fontWeight: 300,
      color: palette.black.main,
      fontFamily: "Lato",
    },
    h4: {
      fontWeight: 600,
      fontSize: 50,
      fontFamily: "Lato",
      color: palette.black.main,
    },
    h5: {
      fontWeight: 300,
      fontSize: 42,
      fontFamily: "Lato",
      color: palette.black.main,
    },
    h6: {
      fontWeight: 500,
      fontSize: 32,
      fontFamily: "Lato",
      color: palette.black.main,
    },
    title: {
      fontWeight: 500,
      fontSize: 30,
      fontFamily: "Poppins",
      color: palette.white.main,
    },
    body1: {
      fontWeight: 400,
      fontSize: 25,
      color: palette.black.main,
      fontFamily: "Poppins",
    },
    body2: {
      fontWeight: 400,
      fontSize: 18,
      color: palette.black.main,
      fontFamily: "Poppins",
    },
    button: {
      fontWeight: 300,
      fontSize: 18,
      fontFamily: "Poppins",
      color: palette.black.main,
      textTransform: "none",
    },
    buttonLinks: {
      fontWeight: 700,
      fontSize: 20,
      fontFamily: "Lato",
      color: palette.info.main,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontFamily: "Poppins",
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export const themes = { theme };
