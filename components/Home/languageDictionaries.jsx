import { Box, Grid } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function LanguageDictionaries() {
  const { setSelectedLanguage } = useContext(Message_data);
  const router = useRouter();

  return (
    <Box
      sx={{
        marginTop: "63px",
        position: "relative",
        backgroundColor: "#d1d1d1",
        borderRadius: "22px",
        padding: "37px 34px 34px 34px",
        minHeight: "349px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          top: "-55px",
          left: "50%",
          transform: "translateX(-50%)",
          "& .wordTxt": {
            fontSize: "56px",
            left: "0",
            top: "0",
            color: "orange",
            position: "absolute",
            fontWeight: "900",
            fontFamily: '"Nunito",sans-serif',
          },
          "& .ofTxt": {
            fontSize: "22px",
            left: "-3px",
            top: "60px",
            position: "absolute",
            color: "#ffffff",
            fontWeight: "700",
            fontFamily: '"Nunito",sans-serif',
          },
          "& .theTxt": {
            fontSize: "41px",
            left: "60px",
            top: "35px",
            position: "absolute",
            color: "#021f39",
            fontFamily: "'MondayFont', cursive",
            whiteSpace: "nowrap",
            fontWeight: "600",
          },
        }}
      >
        <span className="wordTxt">LANGUAGE</span>
        <span className="theTxt">Dictionaries</span>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: "0.5rem" }}>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-hindi/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-hindi");
            }}
          >
           English to Hindi
          </Box>
          </a>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-tamil/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-tamil");
            }}
          >
            English to Tamil
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-telugu/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-telugu");
            }}
          >
            English to Telugu
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-bengali/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-bengali");
            }}
          >
            English to Bengali
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-kannada/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-kannada");
              router.push(``);
            }}
          >
           English to Kannada
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-marathi/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-marathi");
            }}
          >
            English to Marathi
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-malayalam/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-malayalam");
            }}
          >
          English to Malayalam
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-gujarati/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-gujarati");
            }}
          >
           English to Gujarati
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-punjabi/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-punjabi");
            }}
          >
           English to Punjabi
          </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <a href="en/dictionary/english-to-urdu/1">
          <Box
            sx={{
              borderRadius: "0.75rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                lineHeight: "1.25rem",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
            onClick={() => {
              setSelectedLanguage("english-to-urdu");
            }}
          >
            English to Urdu
          </Box>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LanguageDictionaries;
