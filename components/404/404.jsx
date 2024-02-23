import { Box, Container, Divider, Grid, Rating } from "@mui/material";
import React from "react";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import Image from "next/image";
import yourImage from "../../public/aboutWord.png";

function Err404() {
  const { setIsPageLoaded } = useContext(Message_data);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "163px",
          justifyContent:'center'
        }}
      >
        <Box
          sx={{
            width: "50%",
            marginBottom: "163px",
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: "22px",
            padding: "37px 34px 34px 34px",
            minHeight: "300px",
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
            "& .descriptionTxt": {
              fontSize: "18px",
              color: "#262626",
              fontFamily: '"Nunito",sans-serif',
              fontWeight: 400,
              fontStyle: "italic",
              mt: 5,
            },
            "@media only screen and (max-width:800px)": {
              width: "100%",
              marginBottom: "10px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "265px",
              top: "-55px",
              left: "55%",
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
                fontSize: "51px",
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
            <span className="wordTxt">Error</span>
            <span className="theTxt">404</span>
          </Box>
          <Divider
            sx={{ marginTop: "40px", height: "2px", backgroundColor: "orange" }}
          />
          <h4 style={{textAlign:"center", marginTop:"25px", color:"orange"}}><a href="/">Back to Home</a></h4>
        </Box>

      </Box>
    </Container>
  );
}

export default Err404;
