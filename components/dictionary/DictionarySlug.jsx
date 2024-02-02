"use client";

import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import Loader from "../Loader";

function DictionarySlug({ wordData, slug }) {
  const { theme } = useContext(Message_data);
  const router = useRouter();
  console.log(wordData);

  // const { slug } = router.query;
  const [wordApiData, setWordApiData] = useState([]);
  const [inputWord, setInputWord] = useState(slug);
  const [validated, setValidated] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      router.push(`${inputWord}`);
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
  // let count = 0;
  useEffect(() => {
    // setLoading(true)
    if (wordData === null) {
      setLoading(true);
    } else {
      setInputWord(slug);
      setWordApiData(wordData);
      setLoading(false);
    }
  }, [slug, wordData]);

  const getTranslationDetail = async () => {
    // const { text } = await translate("Привет, мир! Как дела?", { to: "en" });
    // console.log(text);
  };

  // const getWordDetails = async () => {
  //   setLoading(true);
  //   toast.promise(
  //     axios.post(`https://api.stackaxiom.com/api/search`, {
  //       word: slug,
  //     }),
  //     {
  //       loading: () => {
  //         return `Getting details of ${slug}!`;
  //       },
  //       success: (res) => {
  //         setWordApiData(res?.data);
  //         setLoading(false);
  //         count = 0;
  //         return "Details fetched successfully!";
  //       },
  //       error: (err) => {
  //         setWordApiData([]);
  //         setLoading(false);
  //         count = 0;
  //         return err?.response?.data?.message;
  //       },
  //     }
  //   );
  // };
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
          padding: "30px 0 30px 0",
          marginTop: "2rem",
          borderRadius: "4px 4px 4px 4px",
        }}
      >
        <Container maxWidth="lg">
          {loading ? (
            <Loader />
          ) : (
            <>
              {!!wordApiData.length ? (
                <>
                  <Box
                    sx={{
                      "& .wordTxt": {
                        fontSize: "56px",
                        color: "orange",
                        fontWeight: "900",
                        fontFamily: '"Nunito",sans-serif',
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <p className="wordTxt">{slug}</p>
                  </Box>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={9}>
                      {!!wordApiData.length &&
                        wordApiData?.map((item, index) => {
                          let revertedString = item?.synonyms
                            ?.replace(/^"|"$/g, "")
                            .replace(/\\\"/g, '"');
                          let revertedExamples = item?.examples
                            ?.replace(/^"|"$/g, "")
                            .replace(/\\\"/g, '"');
                          return (
                            <Box
                              key={index}
                              sx={{
                                marginTop: "20px",
                                backgroundColor: "#d1d1d1",
                                borderRadius: "22px",
                                padding: "34px 34px 34px 34px",
                                minHeight: "200px",
                                "& p": {
                                  fontFamily: '"Nunito",sans-serif',
                                  marginBottom: "8px",
                                },
                              }}
                            >
                              <p>
                                <b>Definition of {slug}: </b>
                                {item?.definition}
                              </p>
                              {item?.synonyms !== '""' && (
                                <p>
                                  <b>Synonyms of {slug}: </b>
                                </p>
                              )}

                              {item?.synonyms === '""' ? null : (
                                <Box
                                  sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    flexWrap: "wrap",
                                    paddingBottom: "5px",
                                    "& p": {
                                      background: "white",
                                      padding: "0.5rem",
                                      borderRadius: "0.25rem",
                                      textTransform: "capitalize",
                                      cursor: "pointer",
                                      "&:hover": {
                                        backgroundColor: "rgba(180,180,180,1)",
                                        textDecoration: "underline",
                                      },
                                    },
                                  }}
                                >
                                  {item?.synonyms &&
                                    JSON.parse(revertedString)?.map(
                                      (data, index) => (
                                        <p
                                          key={index}
                                          onClick={() => router.push(`${data}`)}
                                        >
                                          {data}
                                        </p>
                                      )
                                    )}
                                </Box>
                              )}
                              {item?.has_parts !== '""' && (
                                <p>
                                  <b>Has Parts: </b>
                                  {item?.has_parts === '""'
                                    ? null
                                    : JSON.parse(
                                        item?.has_parts
                                          ?.replace(/^"|"$/g, "")
                                          .replace(/\\\"/g, '"')
                                      )?.toString()}
                                </p>
                              )}
                              {item?.is_a_type_of !== '""' && (
                                <p>
                                  <b>{slug} is a Type of: </b>
                                  {item?.is_a_type_of === '""'
                                    ? null
                                    : JSON.parse(
                                        item?.is_a_type_of
                                          ?.replace(/^"|"$/g, "")
                                          .replace(/\\\"/g, '"')
                                      )?.toString()}
                                </p>
                              )}
                              {item?.examples !== '""' && (
                                <p>
                                  <b>Examples of {slug}: </b>
                                </p>
                              )}

                              {item?.examples === '""' ? null : (
                                <ul style={{ paddingLeft: "2rem" }}>
                                  {JSON.parse(revertedExamples)?.map(
                                    (data, index) => (
                                      <li key={index}>
                                        <i>
                                          <q
                                            style={{
                                              fontSize: "16px",
                                              fontFamily: '"Nunito",sans-serif',
                                            }}
                                          >
                                            {data}
                                          </q>
                                        </i>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </Box>
                          );
                        })}
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Box
                        sx={{
                          position: "relative",
                          marginTop: "20px",
                          backgroundColor: "#d1d1d1",
                          borderRadius: "22px",
                          padding: "10px 30px 30px 30px",
                          minHeight: "200px",
                        }}
                      >
                        <Box
                          sx={{
                            textAlign: "center",
                            paddingBottom: "10px",
                            "& .wordTxt": {
                              fontSize: "40px",
                              fontWeight: "900",
                              fontFamily: '"Nunito",sans-serif',
                              textTransform: "capitalize",
                              color: "orange",
                            },
                          }}
                        >
                          <p className="wordTxt">Rhymes</p>
                        </Box>
                        {!!wordApiData.length &&
                        wordApiData?.[0]?.rhymes === '""' ? null : (
                          <Box
                            sx={{
                              "& .theWord": {
                                fontWeight: 500,
                                fontFamily: '"Nunito",sans-serif',
                                width: "100%",
                                fontSize: "16px",
                                padding: "5px 7px 5px 11px",
                                marginBottom: "10px",
                                transition: ".3s ease",
                                cursor: "pointer",
                                borderRadius: "75px",
                                backgroundColor: "rgba(255,255,255,1)",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                  backgroundColor: "rgba(180,180,180,1)",
                                },
                              },
                            }}
                          >
                            {JSON.parse(
                              wordApiData[0]?.rhymes
                                ?.replace(/^"|"$/g, "")
                                .replace(/\\\"/g, '"') || null
                            )?.map((data, index) => (
                              <p
                                key={index}
                                onClick={() => router.push(`${data}`)}
                                className="theWord"
                              >
                                <SearchIcon
                                  sx={{
                                    fontSize: "16px",
                                    marginRight: "10px",
                                  }}
                                />
                                {data}
                              </p>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Box
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "red",
                    textAlign: "center",
                    fontFamily: '"Nunito",sans-serif',
                  }}
                >
                  No word details found for {slug}!
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: '"Nunito",sans-serif',
          },
        }}
        position="top-right"
      />
    </Container>
  );
}

export default DictionarySlug;
