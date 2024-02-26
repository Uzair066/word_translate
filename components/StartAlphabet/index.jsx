import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { Message_data } from "@/context/context";

function StartAlphabet({ apiData }) {
  const router = useRouter();
  const { isPageLoaded, setIsPageLoaded } = useContext(Message_data);

  const { slug, pageNumber, startWith } = router.query;
  const [page, setpage] = useState(1);
  useEffect(() => {
    setpage(+pageNumber || 1);
  }, [pageNumber]);

  return (
    <Box
      sx={{
        marginTop: "90px",
        position: "relative",
        backgroundColor: "#d1d1d1",
        borderRadius: "22px",
        padding: "37px 34px 34px 34px",
        minHeight: "200px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "170px",
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
            left: "110px",
            top: "45px",
            position: "absolute",
            color: "#021f39",
            fontFamily: "'MondayFont', cursive",
            whiteSpace: "nowrap",
            fontWeight: "600",
          },
        }}
      >
        <span className="wordTxt">Word</span>
        <span className="ofTxt">Start with</span>
        <span className="theTxt">{startWith || "A"}</span>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
        {!!apiData?.data?.length &&
          apiData?.data?.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={3} xl={3}>
              <a href={`/en/${item?.word}-${
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
                          : 'null'
                      }`}>
              <Box
                sx={{
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: "0.5rem",
                  "&:hover": {
                    backgroundColor: "rgba(180,180,180,1)",
                  },
                  "& p": {
                    textTransform: "capitalize",
                    fontSize: ".875rem",
                    lineHeight: "1.25rem",
                    margin: "0px",
                    fontFamily: '"Nunito", sans-serif',
                  },
                }}
                
              >
                <SearchIcon sx={{ fontSize: "16px", marginRight: "10px" }} />
                <p>{item?.word}</p>
              </Box>
              </a>
            </Grid>
          ))}
      </Grid>
      {!!apiData?.data?.length && (
        <Box
          sx={{
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "end",
            "& .Mui-selected": {
              backgroundColor: "orange !important",
              color: "white !important",
              fontWeight: "bold",
              borderColor: "orange !important",
            },
          }}
        >
          <Pagination
            count={Math.ceil(apiData?.count?.length / 20)}
            page={page}
            onChange={(event, value) => {
              if (slug !== undefined) {
                router.push(
                  `/en/dictionary/${slug}/${value}?startWith=${startWith || "A"}`
                );
              } else {
                router.push(`/alphabets/${value}?startWith=${startWith || "A"}`);
              }
            }}
            title={slug !== undefined ?
              `/en/dictionary/${slug}/${page}?startWith=${startWith || "A"}` :
              `/alphabets/${page}?startWith=${startWith || "A"}`
            }
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  );
}

export default StartAlphabet;
