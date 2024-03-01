import { Box, Container, Divider, Grid, Rating } from "@mui/material";
import React, { useEffect } from "react";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { Message_data } from "../../context/context";
import { useContext } from "react";

import { useRouter } from "next/router";

function Err404() {
  const { setIsPageLoaded } = useContext(Message_data);
  const router = useRouter();


  const routeBack = () => {
        setIsPageLoaded(false);
        setTimeout(() => {
          router.push(`/`);
        }, 1000);
  };
  return (
    // <Container>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       marginTop: "163px",
    //       justifyContent:'center'
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         width: "50%",
    //         marginBottom: "163px",
    //         position: "relative",
    //         backgroundColor: "#fff",
    //         borderRadius: "22px",
    //         padding: "37px 34px 34px 34px",
    //         minHeight: "300px",
    //         "& .theWord": {
    //           fontSize: "36px",
    //           color: "#262626",
    //           fontWeight: 500,
    //           fontFamily: '"Nunito",sans-serif',
    //           cursor: "pointer",
    //           paddingBottom: "1rem",
    //           "&:hover": {
    //             textDecoration: "underline",
    //           },
    //         },
    //         "& .descriptionTxt": {
    //           fontSize: "18px",
    //           color: "#262626",
    //           fontFamily: '"Nunito",sans-serif',
    //           fontWeight: 400,
    //           fontStyle: "italic",
    //           mt: 5,
    //         },
    //         "@media only screen and (max-width:800px)": {
    //           width: "100%",
    //           marginBottom: "10px",
    //         },
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           width: "265px",
    //           top: "-55px",
    //           left: "55%",
    //           transform: "translateX(-50%)",
    //           "& .wordTxt": {
    //             fontSize: "56px",
    //             left: "0",
    //             top: "0",
    //             color: "orange",
    //             position: "absolute",
    //             fontWeight: "900",
    //             fontFamily: '"Nunito",sans-serif',
    //           },
    //           "& .theTxt": {
    //             fontSize: "51px",
    //             left: "28px",
    //             top: "35px",
    //             position: "absolute",
    //             color: "#021f39",
    //             fontFamily: "'MondayFont', cursive",
    //             whiteSpace: "nowrap",
    //             fontWeight: "600",
    //           },
    //         }}
    //       >
    //         <span className="wordTxt">Error</span>
    //         <span className="theTxt">404</span>
    //       </Box>
    //       <Divider
    //         sx={{ marginTop: "40px", height: "2px", backgroundColor: "orange" }}
    //       />
    //       <h4 style={{textAlign:"center", marginTop:"25px", color:"orange"}}><a href="/">Back to Home</a></h4>
    //     </Box>

    //   </Box>
    // </Container>
    <div class="flex-container">
    <div class="text-center">
      <h1>
        <span class="fade-in" id="digit1">4</span>
        <span class="fade-in" id="digit2">0</span>
        <span class="fade-in" id="digit3">4</span>
      </h1>
      <h3 class="fadeIn">PAGE NOT FOUND</h3>
      <button type="button" name="button" onClick={routeBack}>Return To Home</button>
    </div>
  </div>
  );
}

export default Err404;
