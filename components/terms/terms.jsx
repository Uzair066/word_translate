import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Terms() {
  const { setIsPageLoaded } = useContext(Message_data);

  // Array of bullet points with random text
  const bulletPoints = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
];
  

  return (
    <Container sx={{ marginTop: "150px" }}>
      <Box
        sx={{
          width: "100%",
          marginBottom: "163px",
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: "22px",
          padding: "37px 34px 34px 34px",
          minHeight: "300px",
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
          <span className="wordTxt">Terms </span>
          <span className="theTxt">of Services</span>
        </Box>
        
        {/* Render bullet points */}
        <div style={{ marginTop: "80px" }}>
          {bulletPoints.map((point, index) => (
            <Typography key={index} variant="body1" sx={{ fontFamily: "Arial", fontSize: "16px", lineHeight: "1.5", marginBottom: "8px" }}>
              • {point}
            </Typography>
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Terms;
