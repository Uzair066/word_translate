"use client";

import { Box, Button, Container, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import Alphabets from "@/components/Home/alphabets";
import StartAlphabet from "@/components/StartAlphabet";
import { Message_data } from "@/context/context";

function WordMeaning() {
  const { theme } = useContext(Message_data);
  const router = useRouter();
  const { pageNumber, startWith } = router.query;
  const [inputWord, setInputWord] = useState("");
  const [validated, setValidated] = useState(true);
  const [apiData, setApiData] = useState(null);
  const { isPageLoaded,   setIsPageLoaded } = useContext(Message_data);

  useEffect(() => {
    if (!!startWith && !!pageNumber) {
      getAlphabeticalData();
    }
  }, [startWith, pageNumber]);

  const getAlphabeticalData = async () => {
    await axios
      .get(
        `https://api.browseword.com/api/alphabets/${pageNumber}?startWith=${startWith}`
      )
      .then((res) => setApiData(res?.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      setIsPageLoaded(false)
      // setTimeout(() => {
      //   router.push(`/dictionary/${inputWord}`);
      // }, 1000);
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
        }}
      >
        <Alphabets />
        <StartAlphabet apiData={apiData} />
      </Box>
    </Container>
  );
}

export default WordMeaning;
