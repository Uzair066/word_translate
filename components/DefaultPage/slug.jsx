"use client";

import { Message_data } from "../../context/context";
import { useContext } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Alphabets from "@/components/Home/alphabets";
import StartAlphabet from "@/components/StartAlphabet";

function PageDefault() {
  const { theme, setIsPageLoaded } = useContext(Message_data);
  const router = useRouter();
  const { slug, pageNumber, startWith } = router.query;
  const [inputWord, setInputWord] = useState("");
  const [validated, setValidated] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // if (!!startWith && !!pageNumber) {
    getAlphabeticalData();
    // }
  }, [startWith, pageNumber]);
  const getAlphabeticalData = async () => {
    await axios
      .get(
        `https://api.browseword.com/api/alphabets/${pageNumber || 1}?startWith=${
          startWith ? startWith : "A"
        }`
      )
      .then((res) => setApiData(res?.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      setIsPageLoaded(false);
      setTimeout(() => {
      router.push(
        `/en/${inputWord}-${
          slug === "english-to-urdu"
            ? "meaning-in-urdu"
            : slug === "english-to-punjabi"
            ? "meaning-in-punjabi"
            : slug === "english-to-hindi"
            ? "meaning-in-hindi"
            : slug === "english-to-tamil"
            ? "meaning-in-tamil"
            : slug === "english-to-telugu"
            ? "meaning-in-telugu"
            : slug === "english-to-bengali"
            ? "meaning-in-bengali"
            : slug === "english-to-kannada"
            ? "meaning-in-kannada"
            : slug === "english-to-marathi"
            ? "meaning-in-marathi"
            : slug === "english-to-malayalam"
            ? "meaning-in-malayalam"
            : slug === "english-to-gujarati"
            ? "meaning-in-gujarati"
            : null
        }`
      );
    }, 1000);
    }
  };
  const validateVendorForm = () => {
    if (inputWord == "" || inputWord == null) {
      setValidated(false);
      return false;
    }
    setValidated(true);
    return true;
  };
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "90px" }}>
      <Box
        sx={{
          backgroundColor:
            theme === "dark" ? "#303030 !important" : "#fff !important",
          padding: "30px 0 30px 0",
          marginTop: "90px",
          borderRadius: "4px 4px 4px 4px",

          "& h1": {
            fontSize: "1.5rem",
            fontWeight: "600",
            color: theme === "dark" ? "white" : "black",
            fontFamily: '"Nunito", sans-serif',
            margin: "unset",
            paddingBottom: "10px",
          },
        }}
      >
        <Container maxWidth="sm">
          <h1
            style={{
              color: "orange",
              textAlign: "center",
              fontFamily: '"Nunito", sans-serif',
              fontSize: "2rem",
            }}
          >
            {slug === "english-to-urdu"
              ? "English to Urdu Dictionary"
              : slug === "english-to-punjabi"
              ? "English to Punjabi Dictionary"
              : slug === "english-to-hindi"
              ? "English to Hindi Dictionary"
              : slug === "english-to-tamil"
              ? "English to Tamil Dictionary"
              : slug === "english-to-telugu"
              ? "English to Telugu Dictionary"
              : slug === "english-to-bengali"
              ? "English to Bengali Dictionary"
              : slug === "english-to-kannada"
              ? "English to Kannada Dictionary"
              : slug === "english-to-marathi"
              ? "English to Marathi Dictionary"
              : slug === "english-to-malayalam"
              ? "English to Malayalam Dictionary"
              : slug === "english-to-gujarati"
              ? "English to Gujarati Dictionary"
              : null}
          </h1>
          <h1>Look up a word, learn it forever.</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                hiddenLabel
                size="small"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                sx={{
                  width: "100%",
                  background: "white",
                  borderRadius: "5px",
                  fontSize: "3rem",
                }}
                type="text"
                error={!validated && (inputWord == "" || inputWord == null)}
                inputProps={{ placeholder: "Enter a word" }}
              />
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  height: "40px",
                  background: "orange",
                  "&:hover": {
                    background: "orange",
                  },
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
          </form>
          {!validated && (inputWord == "" || inputWord == null) ? (
            <Box
              sx={{
                fontSize: "medium",
                fontWeight: "bold",
                color: "red",
                paddingTop: "5px",
                paddingLeft: "1rem",
              }}
            >
              Word is required!
            </Box>
          ) : null}
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: theme === "dark" ? "#303030 !important" : "#fff",
          padding: "30px 83px 30px 83px",
          marginTop: "1.6rem",
          borderRadius: "4px 4px 4px 4px",
          paddingBottom: "5rem",
          '@media (max-width: 500px)': {
            padding: "30px 5px 30px 5px",
          }
        }}
      >
        <StartAlphabet apiData={apiData} />
        <Alphabets />
      </Box>
    </Container>
  );
}

export default PageDefault;
