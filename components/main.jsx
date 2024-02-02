"use client";

import Footer from "@/components/Footer/Footer";
import { HeaderMain } from "@/components/Header";
import Context from "@/context/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

export default function Main({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const muiTheme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === "dark" ? "black" : "#ccc",
          },
        },
      },
    },
  });
  return (
    <>
      <Context>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <HeaderMain setMode={setMode} />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Context>
    </>
  );
}
