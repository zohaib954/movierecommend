import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
            100: "#cdd0d8",
            200: "#9aa0b1",
            300: "#68718b",
            400: "#354164",
            500: "#03123d",
            600: "#020e31",
            700: "#020b25",
            800: "#010718",
            900: "#01040c",
      },
      secondary: {
        100: "#091e1e",
        200: "#123c3c",
        300: "#1b595a",
        400: "#247778",
        500: "#2d9596",
        600: "#57aaab",
        700: "#81bfc0",
        800: "#abd5d5",
        900: "#d5eaea",
    },
      ternary: {
        100: "#081017",
        200: "#0f202e",
        300: "#173045",
        400: "#1e405c",
        500: "#265073",
        600: "#51738f",
        700: "#7d96ab",
        800: "#a8b9c7",
        900: "#d4dce3",
},
        pink: {
          100: "#32061c",
          200: "#640b38",
          300: "#961155",
          400: "#c81671",
          500: "#fa1c8d",
          600: "#fb49a4",
          700: "#fc77bb",
          800: "#fda4d1",
          900: "#fed2e8",
},
      }
    : {
      primary: {
          100: "#fbfdf7",
          200: "#f7fbef",
          300: "#f0f6de",
          400: "#ecf4d6",
          500: "#bdc3ab",
          600: "#bdc3ab",
          700: "#8e9280",
          800: "#5e6256",
          900: "#2f312b"
      },
      secondary: {
          100: "#d5eaea",
          200: "#abd5d5",
          300: "#57aaab",
          400: "#2d9596",
          500: "#81bfc0",
          600: "#247778",
          700: "#1b595a",
          800: "#123c3c",
          900: "#091e1e"
      },
      ternary: {
          100: "#d4dce3",
          200: "#a8b9c7",
          300: "#51738f",
          400: "#265073",
          500: "#7d96ab",
          600: "#1e405c",
          700: "#173045",
          800: "#0f202e",
          900: "#081017",
},
      pink: {
        100: "#fed2e8",
        200: "#fda4d1",
        300: "#fc77bb",
        400: "#fb49a4",
        500: "#fa1c8d",
        600: "#c81671",
        700: "#961155",
        800: "#640b38",
        900: "#32061c",
},
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.primary[500],
              light: colors.primary[200],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[200],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.primary[500],
              light: colors.primary[200],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};