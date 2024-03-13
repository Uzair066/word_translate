"use client";

import Footer from "@/components/Footer/Footer";
import { HeaderMain } from "@/components/Header";
import { Message_data } from "@/context/context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CircularIndeterminate from "./Loader";
import Login from "./login/login";
import MiniDrawer from "./Dashboard/dashboard.jsx";

export default function Main({ Component, pageProps }) {
  const { asPath, push } = useRouter();
  const [loaderFade, setLoaderFade] = useState(false);

  const [mode, setMode] = useState("light");
  const { isPageLoaded, setIsPageLoaded, userAuthToken } = useContext(Message_data);
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
    const token = window.localStorage.getItem("p_u_t")
    
    if(token === null && asPath.includes("/admin-dashboard/")){
      push('/admin-login/')
    }else if(token != null && asPath === "/admin-login/" ){
      push("/admin-dashboard/all-article")
    }
  }, [asPath]);

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
        {asPath !== "/admin-login/" && !asPath.includes("/admin-dashboard/")? (
          <>
            <HeaderMain setMode={setMode} setIsPageLoaded={setIsPageLoaded} />
            <Component {...pageProps} />
            <Footer setIsPageLoaded={setIsPageLoaded} />
          </>
        ) : (
          <>
            {asPath.includes("/admin-dashboard/") ? (
              <MiniDrawer Component={Component} pageProps={pageProps}/>
            ) : (
              <Component {...pageProps} />
            )}
          </>
        )}
      </ThemeProvider>
    </>
  );
}
