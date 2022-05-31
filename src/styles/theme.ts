export const theme = {
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1536,
  },
  colors: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#6218FF",
      // light: "#84c5fb",
      // dark: "#1b476a",
      // contrastText: "#fff",
    },
    secondary: {
      main: "#FF3232",
      // light: "#db2c6f",
      // dark: "#55112b",
      // contrastText: "#fff",
    },
    gray: {
      main: "#bdbdbd",
      light: "#e0e0e0",
      dark: "#424242",
    },
  },
  backgroundButton: {
    primary: "linear-gradient(90deg, #002CBD -7.64%, #C00DFF 110.42%);",
    secondary: "#FF3232",
    moreDetail: "rgba(255, 255, 255, 0.1)",
  },
};

export type Theme = typeof theme;
