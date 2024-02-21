"use client";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import PopularWords from "./popularWords";
import LanguageDictionaries from "./languageDictionaries";
import Alphabets from "./alphabets";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Home({ posts }) {
  const router = useRouter();

  const { theme } = useContext(Message_data);
  // const [popular, setPopular] = useState([posts]);
  const [inputWord, setInputWord] = useState("");
  const [validated, setValidated] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      router.push(`dictionary/${inputWord}`);
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
  // useEffect(() => {
  //   fetchAllPopularWords();
  // }, []);
  // const fetchAllPopularWords = async () => {
  //   const res = await fetch("https://api.browseword.com/api/top30words");
  //   const posts = await res.json();
  //   setPopular(!!posts?.length ? posts : []);
  // };
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            backgroundColor:
              theme === "dark" ? "#303030 !important" : "#fff !important",
            padding: "30px 0 30px 0",
            marginTop: "90px",
            borderRadius: "4px 4px 4px 4px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
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
                      error={
                        !validated && (inputWord == "" || inputWord == null)
                      }
                      inputProps={{ placeholder: "Enter a word" }}
                    />
                    <Button
                      variant="contained"
                      size="medium"
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
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: theme === "dark" ? "#303030 !important" : "white",
            padding: "30px 83px 30px 83px",
            marginTop: "1.6rem",
            borderRadius: "4px 4px 4px 4px",
            marginBottom: "90px",
            paddingBottom: "5rem",
            "@media only screen and (max-width:1024px)": {
              padding: "30px 15px 30px 15px",
            },
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: "63px",
                  position: "relative",
                  backgroundColor: "#d1d1d1",
                  borderRadius: "22px",
                  padding: "37px 34px 34px 34px",
                  minHeight: "349px",
                  "& .theWord": {
                    fontSize: "36px",
                    color: "#262626",
                    fontWeight: 500,
                    fontFamily: '"Nunito",sans-serif',
                    cursor: "pointer",
                    paddingBottom: "1rem",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                  "& .synonymTxt": {
                    fontSize: "22px",
                    fontFamily: '"Nunito",sans-serif',
                    marginBottom: "2rem",
                  },
                  "& .descriptionTxt": {
                    fontSize: "18px",
                    color: "#262626",
                    fontFamily: '"Nunito",sans-serif',
                    fontWeight: 400,
                    fontStyle: "italic",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "165px",
                    top: "-55px",
                    left: "47%",
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
                      left: "28px",
                      top: "35px",
                      position: "absolute",
                      color: "#021f39",
                      fontFamily: "'MondayFont', cursive",
                      whiteSpace: "nowrap",
                      fontWeight: "600",
                    },
                  }}
                >
                  <span className="wordTxt">WORD</span>
                  <span className="ofTxt">OF</span>
                  <span className="theTxt">
                    the<span> </span>day
                  </span>
                </Box>
                <span
                  onClick={() => router.push(`dictionary/sulk`)}
                  className="theWord"
                >
                  sulk
                </span>
                <p className="synonymTxt">somurtmak</p>
                <p className="descriptionTxt">
                  <q>The little boy sulked in a corner after being scolded.</q>
                </p>
                <p className="descriptionTxt">
                  <q>Azar işiten küçük çocuk, gidip bir köşede somurttu.</q>
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: "63px",
                  position: "relative",
                  backgroundColor: "#d1d1d1",
                  borderRadius: "22px",
                  padding: "40px 34px 34px 34px",
                  minHeight: "349px",
                  "& .theWord": {
                    fontWeight: 500,
                    fontFamily: '"Nunito",sans-serif',
                    width: "100%",
                    fontSize: "16px",
                    padding: "5px 7px 5px 11px",
                    margin: "3px",
                    marginBottom: "10px",
                    transition: ".3s ease",
                    cursor: "pointer",
                    borderRadius: "75px",
                    backgroundColor: "rgba(255,255,255,1)",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { backgroundColor: "rgba(180,180,180,1)" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "252px",
                    top: "-55px",
                    left: "43%",
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

                    "& .theTxt": {
                      fontSize: "41px",
                      left: "100px",
                      top: "35px",
                      position: "absolute",
                      color: "#021f39",
                      fontFamily: "'MondayFont', cursive",
                      whiteSpace: "nowrap",
                      fontWeight: "600",
                    },
                  }}
                >
                  <span className="wordTxt">TRENDING</span>

                  <span className="theTxt">now</span>
                </Box>
                <p
                  onClick={() => router.push(`dictionary/sulk`)}
                  className="theWord"
                >
                  <SearchIcon sx={{ fontSize: "16px", marginRight: "10px" }} />
                  sulk
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <LanguageDictionaries />
            </Grid>
            <Grid item xs={12}>
              <PopularWords popular={posts} />
            </Grid>
            <Grid item xs={12}>
              <Alphabets />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
