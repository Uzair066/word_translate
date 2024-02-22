"use client";

import Footer from "@/components/Footer/Footer";
import { HeaderMain } from "@/components/Header";
import { Message_data } from "@/context/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import CircularIndeterminate from "./Loader";

export default function Main({ Component, pageProps }) {
  const {asPath} = useRouter();
  const [loaderFade, setLoaderFade] = useState(false);

  const [mode, setMode] = useState("light");
  const { isPageLoaded, setIsPageLoaded } = useContext(Message_data);
  const [firstPageLoad, setFirstPageLoad] = useState(true);
  const [circleShow, setCircleShow] = useState(false);

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

  useEffect(() => {
    const handleLoad = () => {
      setCircleShow(true);
      setTimeout(() => {
        setFirstPageLoad(false);
        setLoaderFade(true);
      }, 500);
      setTimeout(() => {
        setIsPageLoaded(true);
        setLoaderFade(false);
      }, 1000);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleLoad();
    } else {
      window.addEventListener("load", () => {
        setIsPageLoaded(false);
      });
    }
    return () => {
      window.removeEventListener("load", () => {
        setIsPageLoaded(false);
      });
    };
  }, [asPath]);
  
  return (
    <>
    {!isPageLoaded && (
        <>
          {firstPageLoad && (
            <CircularIndeterminate classes={"loaderBackground"} />
          )}
          {loaderFade && (
            <CircularIndeterminate
              circleShow={circleShow}
              classes={"loaderBarUnload"}
            />
          )}
          {!loaderFade && <CircularIndeterminate classes={"loaderBar"} />}
        </>
      )}
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <HeaderMain setMode={setMode} setIsPageLoaded={setIsPageLoaded}/>
          <Component {...pageProps} />
          <Footer setIsPageLoaded={setIsPageLoaded}/>
        </ThemeProvider>
    </>
  );
}
