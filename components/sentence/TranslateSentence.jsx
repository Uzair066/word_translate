"use client";

import { Message_data } from "../../context/context";
import { useContext, useRef } from "react";
import { Box, Button, Container, Divider, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";

function TranslateSentence({htmlData}) {
  const { theme } = useContext(Message_data);
  const router = useRouter();

  const params = router.query.slug;

  const [inputWord, setInputWord] = useState("");
  const [validated, setValidated] = useState(true);
  const [translatedText, setTranslatedText] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateVendorForm()) {
      getTranslatedText();
    }
  };
  const getTranslatedText = async () => {
    setLoading(true)
    await axios
      .get(
        `https://api.browseword.com/api/sentence/${params}?sentence=${inputWord}`
      )
      .then((res) => {
        setTranslatedText(res?.data);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };
  const validateVendorForm = () => {
    if (inputWord == "" || inputWord == null) {
      setValidated(false);
      return false;
    }
    setValidated(true);
    return true;
  };
  const handleClearInput = () => {
    setInputWord("");
  };
  const textFieldRef = useRef(null);

  const handleCopyText = () => {
    navigator.clipboard.writeText(translatedText?.translated_sentence);
    highlightText();
  };

  const highlightText = () => {
    const input = textFieldRef.current?.querySelector("textarea");
    if (input) {
      input.select();
    }
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([translatedText?.translated_sentence], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "translated_text.txt";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: "90px", mt: 20 }}>
      <Box sx={{ width: "100%" }}>
        <Grid
          sx={{
            backgroundColor: theme === "dark" ? "#303030 !important" : "#fff",
            padding: "50px 50px 40px 50px",
            borderRadius: "4px 4px 4px 4px",
            '@media (max-width: 500px)': {
              padding: "50px 5px 40px 5px",
            }
          }}
          container
          rowSpacing={{ xs: 5, sm: 2, md: 0}} columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item xs={12} md={12} lg={5}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#d1d1d1",
                borderRadius: "22px",
                minHeight: "360px",
                px: 3,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
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
                    textTransform: "capitalize",
                  },

                  "& .theTxt": {
                    fontSize: "21px",
                    right: "0px",
                    top: "63px",
                    position: "absolute",
                    color: "#021f39",
                    fontFamily: "'MondayFont', cursive",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                    cursor:"pointer"
                  },
                }}
              >
                <span className="wordTxt">{params?.split("-")?.[0]}</span>
                <span className="theTxt" onClick={handleClearInput}>
                  <DeleteForeverIcon />
                </span>
              </Box>
              <TextField
                sx={{
                  width: "100%",
                  marginTop: "35px",
                  bgcolor: "#fff",
                  textTransform: "capitalize",
                  "& .MuiInputBase-formControl": {
                    borderRadius: "unset",
                  },
                }}
                aria-label="minimum height"
                rows={12}
                value={inputWord}
                placeholder="Start Typing Here..."
                multiline
                onChange={(e) => setInputWord(e.target.value)}
                error={
                  !validated && (inputWord == "" || inputWord == null)
                }
              />
            </Box>
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
          </Grid>
          <Grid item xs={12} md={12} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{
                height: "30px",
                background: "orange",
                "&:hover": {
                  background: "orange",
                },
              }}
              onClick={() =>
                router.push(
                  `${params?.split("-")?.[2]}-to-${params?.split("-")?.[0]}`
                )
              }
            >
              <SwapHorizIcon titleAccess={`translator/${params?.split("-")?.[2]}-to-${params?.split("-")?.[0]}`}/>
            </Button>
            {loading && 
            <Box sx={{display:"flex", justifyContent:"center", 
            '@media (min-width: 1280px)': {
              mt: 15 // Apply margin-top only for large screens (>= 1280px)
            }
            }}>
              <CircularProgress style={{ color: "orange" }} />
              </Box>
            }
          </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#d1d1d1",
                borderRadius: "22px",
                minHeight: "360px",
                px: 3,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
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
                    textTransform: "capitalize",
                  },

                  "& .theTxt": {
                    fontSize: "21px",
                    right: "0px",
                    top: "59px",
                    position: "absolute",
                    color: "#021f39",
                    fontFamily: "'MondayFont', cursive",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                  },
                }}
              >
                <span className="wordTxt">{params?.split("-")?.[2]}</span>
                <span className="theTxt">
                  <ContentCopyIcon
                    onClick={handleCopyText}
                    style={{ marginRight: "5px", cursor:"pointer" }}
                  />{" "}
                  <SaveIcon onClick={handleDownloadText}  style={{ cursor:"pointer" }}/>{" "}
                </span>
              </Box>
              <TextField
                ref={textFieldRef}
                sx={{
                  width: "100%",
                  marginTop: "30px",
                  bgcolor: "#fff",
                  "& .MuiInputBase-formControl": {
                    borderRadius: "unset",
                  },
                }}
                aria-label="minimum height"
                rows={12}
                multiline
                aria-readonly
                value={translatedText?.translated_sentence}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box >
            <Button
              variant="contained"
              size="medium"
              type="submit"
              sx={{
                height: "30px",
                background: "orange",
                "&:hover": {
                  background: "orange",
                },
              }}
              onClick={handleSubmit}
            >
              Translate
            </Button>
          </Box>
          </Grid>
         
          <Grid item xs={12} md={12} lg={12}>
          <Divider
            sx={{ marginTop: "40px", height: "2px", backgroundColor: "orange" }}
          />
          <div className="article-content" dangerouslySetInnerHTML={{ __html: htmlData?.article_text }} />
        </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default TranslateSentence;
