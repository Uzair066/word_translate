import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Top200({ top200 }) {
  const { setIsPageLoaded } = useContext(Message_data);

  return (
    <Container maxWidth="lg">
    <Box
      sx={{
        marginTop: "130px",
        position: "relative",
        backgroundColor: "#d1d1d1",
        borderRadius: "22px",
        padding: "37px 34px 34px 34px",
        minHeight: "349px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "300px",
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
            left: "85px",
            top: "35px",
            position: "absolute",
            color: "#021f39",
            fontFamily: "'MondayFont', cursive",
            whiteSpace: "nowrap",
            fontWeight: "600",
          },
        }}
      >
        <span className="wordTxt">TOP 200</span>
        <span className="theTxt">words</span>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
        {!!top200.length &&
          top200.map((item, index) => (
            <Grid key={index} item xs={12} md={6} lg={3} xl={3}>
               <a href={`/en/${item?.word}-meaning-in-hindi`} onClick={() => setIsPageLoaded(false)}>
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
                // onClick={() => router.push(`dictionary/${item?.word}`)}
              >
                <SearchIcon sx={{ fontSize: "16px", marginRight: "10px" }} />
                <p>{item?.word}</p>
              </Box>
              </a>
            </Grid>
          ))}
      </Grid>
    </Box>
    </Container>
  );
}

export default Top200;
