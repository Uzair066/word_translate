import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Alphabets() {
  const router = useRouter();
  const { slug } = router.query;

  const alphabetsArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <Box
      sx={{
        marginTop: "63px",
        position: "relative",
        backgroundColor: "#d1d1d1",
        borderRadius: "22px",
        padding: "37px 34px 34px 34px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "270px",
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
            left: "40px",
            top: "35px",
            position: "absolute",
            color: "#021f39",
            fontFamily: "'MondayFont', cursive",
            whiteSpace: "nowrap",
            fontWeight: "600",
          },
        }}
      >
        <span className="wordTxt">BROWSE</span>
        <span className="theTxt">Dictionary</span>
      </Box>
      <Box
        sx={{
          marginTop: "0.5rem",
          display: "flex",
          alignItems: "center",
          columnGap: 8,
          rowGap: 2,
          flexWrap: "wrap",
        }}
      >
        {alphabetsArray.map((item) => (
          <Box
            key={item}
            onClick={() => {
              if (slug !== undefined) {
                router.push(`/en/dictionary/${slug}/1?startWith=${item}`);
              } else {
                router.push(`/alphabets/1?startWith=${item}`);
              }
            }}
            sx={{
              borderRadius: "0.25rem",
              height: "2.5rem",
              width: "2.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "rgba(180,180,180,1)",
              },
              "& p": {
                textTransform: "capitalize",
                margin: "0px",
                fontFamily: '"Nunito", sans-serif',
              },
            }}
          >
            <p>{item}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Alphabets;
