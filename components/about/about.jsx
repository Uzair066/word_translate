import { Box, Container, Divider, Grid, Rating } from "@mui/material";
import React from "react";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import Image from "next/image";
import yourImage from "../../public/aboutWord.png";

function About() {
  const { setIsPageLoaded } = useContext(Message_data);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginTop: "163px",
          justifyContent: "space-between",
          "@media only screen and (max-width:800px)": {
            flexDirection: "column",
            justifyContent: "center",
          },
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
            <span className="wordTxt">About</span>
            <span className="theTxt">Us</span>
          </Box>
          <p className="descriptionTxt">
            <q>
              We envision a world where language barriers cease to exist, where
              communication knows no bounds, and where every individual has the
              opportunity to unlock their full potential through the mastery of
              language. Our vision drives us to continually innovate and evolve,
              pushing the boundaries of what's possible in the realm of
              linguistic exploration.
            </q>
          </p>
          <Divider
            sx={{ marginTop: "40px", height: "2px", backgroundColor: "orange" }}
          />
        </Box>

        <Box
          sx={{
            width: "40%",
            "@media only screen and (max-width:800px)": {
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          <Image
            src={yourImage}
            alt="Description of the image"
            width={300}
            height={300}
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default About;
