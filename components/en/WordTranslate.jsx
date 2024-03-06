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

function WordTranslate({ englishData, wordApiData, wordToTranslate }) {
  const { theme, setIsPageLoaded } = useContext(Message_data);
  const router = useRouter();
  const [inputWord, setInputWord] = useState(
    wordToTranslate?.split("-meaning-in-")[0]
  );
  const [validated, setValidated] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      if (
        wordToTranslate?.split("-meaning-in-")[0].toLowerCase() !=
        inputWord.toLowerCase()
      ) {
        setIsPageLoaded(false);
        setTimeout(() => {
          router.push(
            `${inputWord}-${
              wordToTranslate?.split("-meaning-in-")[1] === "urdu"
                ? "meaning-in-urdu"
                : wordToTranslate?.split("-meaning-in-")[1] === "punjabi"
                ? "meaning-in-punjabi"
                : wordToTranslate?.split("-meaning-in-")[1] === "hindi"
                ? "meaning-in-hindi"
                : wordToTranslate?.split("-meaning-in-")[1] === "tamil"
                ? "meaning-in-tamil"
                : wordToTranslate?.split("-meaning-in-")[1] === "telugu"
                ? "meaning-in-telugu"
                : wordToTranslate?.split("-meaning-in-")[1] === "bengali"
                ? "meaning-in-bengali"
                : wordToTranslate?.split("-meaning-in-")[1] === "kannada"
                ? "meaning-in-kannada"
                : wordToTranslate?.split("-meaning-in-")[1] === "marathi"
                ? "meaning-in-marathi"
                : wordToTranslate?.split("-meaning-in-")[1] === "malayalam"
                ? "meaning-in-malayalam"
                : wordToTranslate?.split("-meaning-in-")[1] === "gujarati"
                ? "meaning-in-gujarati"
                : null
            }`
          );
        }, 1000);
      }
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
  let count = 0;
  useEffect(() => {
    setInputWord(wordToTranslate?.split("-meaning-in-")[0]);
    count++;
  }, [wordToTranslate, wordApiData]);

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
          {loading && <Loader />}
          <>
            {!!wordApiData.length ? (
              <>
                <Box
                  sx={{
                    "& .wordTxt": {
                      fontSize: "50px",
                      color: "orange",
                      fontWeight: "700",
                      fontFamily: '"Nunito",sans-serif',
                      textTransform: "capitalize",
                      textAlign: "center",
                    },
                    "& span": {
                      fontSize: "50px",
                      color:
                        theme === "dark"
                          ? "#fff !important"
                          : "#303030 !important",
                      fontWeight: "500",
                      fontFamily: '"Nunito",sans-serif',
                      textTransform: "capitalize",
                    },
                  }}
                >
                  <p className="wordTxt">
                    {wordToTranslate?.split("-meaning-in-")[0]}{" "}
                    <span>Meaning in</span>{" "}
                    {wordToTranslate?.split("-meaning-in-")[1]}
                  </p>
                </Box>
                <Box
                  sx={{
                    "& .wordTxt": {
                      fontSize: "20px",
                      color: "orange",
                      fontWeight: "500",
                      fontFamily: '"Nunito",sans-serif',
                      textTransform: "capitalize",
                      textAlign: "center",
                    },
                  }}
                >
                  <p className="wordTxt">
                    {wordToTranslate?.split("-meaning-in-")[1] === "kannada" &&
                      `ಇದರ ನಿಜವಾದ ಅರ್ಥವನ್ನು ತಿಳಿಯಿರಿ ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } ಸರಳ ಉದಾಹರಣೆಗಳು ಮತ್ತು ವ್ಯಾಖ್ಯಾನಗಳೊಂದಿಗೆ`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "hindi" &&
                      `जानें इसका सही मतलब ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } सरल उदाहरणों और परिभाषाओं के साथ`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "tamil" &&
                      `என்பதன் உண்மையான அர்த்தத்தை அறிக ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } எளிய எடுத்துக்காட்டுகள் மற்றும் வரையறைகளுடன்`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "telugu" &&
                      `యొక్క నిజమైన అర్థం తెలుసుకోండి ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } సాధారణ ఉదాహరణలు మరియు నిర్వచనాలతో`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "bengali" &&
                      `এর প্রকৃত অর্থ জানুন ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } সহজ উদাহরণ এবং সংজ্ঞা সহ`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "marathi" &&
                      `चा खरा अर्थ जाणून घ्या ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } साधी उदाहरणे आणि व्याख्या सह`}
                    {wordToTranslate?.split("-meaning-in-")[1] ===
                      "malayalam" &&
                      `എന്നതിൻ്റെ യഥാർത്ഥ അർത്ഥം മനസ്സിലാക്കുക ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } ലളിതമായ ഉദാഹരണങ്ങളും നിർവചനങ്ങളും സഹിതം`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "gujrati" &&
                      `નો સાચો અર્થ જાણો ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } સરળ ઉદાહરણો અને વ્યાખ્યાઓ સાથે`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "punjabi" &&
                      `ਦਾ ਸਹੀ ਅਰਥ ਜਾਣੋ ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } ਸਧਾਰਨ ਉਦਾਹਰਣਾਂ ਅਤੇ ਪਰਿਭਾਸ਼ਾਵਾਂ ਦੇ ਨਾਲ`}
                    {wordToTranslate?.split("-meaning-in-")[1] === "urdu" &&
                      `کے حقیقی معنی جانیں۔ ${
                        wordToTranslate?.split("-meaning-in-")[0]
                      } سادہ مثالوں اور تعریفوں کے ساتھ`}
                  </p>
                </Box>
                <Box
                  sx={{
                    "& .wordTxt": {
                      fontSize: "56px",
                      color: "orange",
                      fontWeight: "900",
                      fontFamily: '"Nunito",sans-serif',
                      textTransform: "capitalize",
                    },
                    "& span": {
                      fontSize: "x-large",
                      color:
                        theme === "dark"
                          ? "#fff !important"
                          : "#303030 !important",
                      fontWeight: "700",
                      fontFamily: '"Nunito",sans-serif',
                      textTransform: "capitalize",
                    },
                  }}
                >
                  <p className="wordTxt">{wordApiData?.[0]?.word_translated}</p>
                  <span>{wordToTranslate?.split("-meaning-in-")[0]}</span>
                </Box>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={9}>
                    {!!wordApiData.length &&
                      wordApiData?.map((item, index) => (
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
                            },
                          }}
                        >
                          <p>
                            <b>
                              {`Definition of ${
                                wordToTranslate?.split("-meaning-in-")[0]
                              }: `}
                            </b>
                          </p>
                          <Box
                            sx={{
                              display: "flex",
                              marginBottom: "8px",
                              flexWrap: "wrap",
                              flexDirection: "column",
                              "& p": {
                                marginBottom: "0px",
                              },
                            }}
                          >
                            <p>{item?.definition}</p>
                            <p
                              style={{
                                fontSize: "small",
                                color: "#716f6f",
                              }}
                            >
                              {englishData?.[index]?.definition}
                            </p>
                          </Box>
                          {item?.synonyms !== "" && (
                            <p>
                              <b>
                                {`Synonyms of ${
                                  wordToTranslate?.split("-meaning-in-")[0]
                                }: `}
                              </b>
                            </p>
                          )}

                          {item?.synonyms === "" ? null : (
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                flexWrap: "wrap",
                                paddingBottom: "5px",
                                "& .textToClick": {
                                  background: "white",
                                  padding: "0.5rem",
                                  borderRadius: "0.25rem",
                                  textTransform: "capitalize",
                                  cursor: "pointer",
                                  "&:hover": {
                                    backgroundColor: "rgba(180,180,180,1)",
                                  },
                                },
                              }}
                            >
                              {item?.synonyms?.map((data, i) => (
                                <Box
                                  key={i}
                                  className="textToClick"
                                  onClick={() => {
                                    setIsPageLoaded(false)
                                    setTimeout(() => {
                                      router.push(
                                        `/en/${
                                          englishData?.[index]?.synonyms?.[i]
                                        }-meaning-in-${
                                          wordToTranslate?.split(
                                            "-meaning-in-"
                                          )[1]
                                        }`
                                      )
                                    }, 1000);
                                  }}
                                >
                                  <p>{data}</p>
                                  <p
                                    style={{
                                      fontSize: "small",
                                      color: "#716f6f",
                                    }}
                                  >
                                    {englishData?.[index]?.synonyms !== "" &&
                                      englishData?.[index]?.synonyms?.[i]}
                                  </p>
                                </Box>
                              ))}
                            </Box>
                          )}
                          {item?.has_parts !== "" && (
                            <>
                              <p>
                                <b>Has Parts: </b>
                              </p>
                              <Box sx={{ marginBottom: "8px" }}>
                                <p>
                                  {item?.has_parts === ""
                                    ? null
                                    : item?.has_parts?.toString()}
                                </p>
                                <p
                                  style={{
                                    fontSize: "small",
                                    color: "#716f6f",
                                  }}
                                >
                                  {englishData?.[index]?.has_parts === ""
                                    ? null
                                    : englishData?.[
                                        index
                                      ]?.has_parts?.toString()}
                                </p>
                              </Box>
                            </>
                          )}
                          {item?.is_a_type_of !== "" && (
                            <>
                              <p>
                                <b>
                                  {`${
                                    wordToTranslate?.split("-meaning-in-")[0]
                                  } is a Type of: `}
                                </b>
                              </p>
                              <Box sx={{ marginBottom: "8px" }}>
                                <p
                                  style={{
                                    wordBreak: "break-all",
                                  }}
                                >
                                  {item?.is_a_type_of === ""
                                    ? null
                                    : item?.is_a_type_of?.toString()}
                                </p>
                                <p
                                  style={{
                                    fontSize: "small",
                                    color: "#716f6f",
                                    wordBreak: "break-all",
                                  }}
                                >
                                  {englishData?.[index]?.is_a_type_of === ""
                                    ? null
                                    : englishData?.[
                                        index
                                      ]?.is_a_type_of?.toString()}
                                </p>
                              </Box>
                            </>
                          )}
                          {item?.examples !== "" && (
                            <p>
                              <b>
                                {`Examples of ${
                                  wordToTranslate?.split("-meaning-in-")[0]
                                }: `}
                              </b>
                            </p>
                          )}

                          {item?.examples === "" ? null : (
                            <ul style={{ paddingLeft: "2rem" }}>
                              {item?.examples?.map((data, i) => (
                                <li key={i}>
                                  <span
                                    style={{
                                      width: "100%",
                                      display: "block",
                                    }}
                                  >
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
                                  </span>
                                  <span>
                                    <i>
                                      <q
                                        style={{
                                          fontSize: "small",
                                          color: "#716f6f",
                                          fontFamily: '"Nunito",sans-serif',
                                        }}
                                      >
                                        {englishData?.[index]?.examples !==
                                          "" &&
                                          englishData?.[index]?.examples?.[i]}
                                      </q>
                                    </i>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </Box>
                      ))}
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
                      wordApiData?.[0]?.rhymes === "" ? null : (
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
                              borderRadius: "75px",
                              backgroundColor: "rgba(255,255,255,1)",
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                              "&:hover": {
                                backgroundColor: "rgba(180,180,180,1)",
                              },
                            },
                          }}
                        >
                          {wordApiData[0]?.rhymes?.map((data, index) => (
                            <p
                              key={index}
                              className="theWord"
                              onClick={() =>{
                                setIsPageLoaded(false)
                                setTimeout(() => {
                                  router.push(
                                    `/en/${
                                      englishData?.[0]?.rhymes?.[index]
                                    }-meaning-in-${
                                      wordToTranslate?.split("-meaning-in-")[1]
                                    }`
                                  )
                                }, 1000)
                              }}
                            >
                              <SearchIcon
                                sx={{
                                  fontSize: "16px",
                                  marginRight: "10px",
                                }}
                              />
                              {data}
                              <br />
                              {englishData?.[0]?.rhymes !== "" &&
                                englishData?.[0]?.rhymes?.[index]}
                            </p>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </>
            ) : (
              router.push("/404")
            )}
          </>
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

export default WordTranslate;
