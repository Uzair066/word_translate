import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Message_data } from "../../context/context";
import { useContext } from "react";

function Footer() {
  const { theme } = useContext(Message_data);
  return (
    <>
     
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#333",
          flexWrap:'wrap',
          gap:5,
          borderTop: "1px solid #333",
          padding: "30px 0px 30px 0px",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: 2,
            // marginTop: "1rem",
          }}
        >
          <TwitterIcon sx={{ color: "white", cursor: "pointer" }} />
          <FacebookOutlinedIcon sx={{ color: "white", cursor: "pointer" }} />
          <InstagramIcon sx={{ color: "white", cursor: "pointer" }} />
          <LinkedInIcon sx={{ color: "white", cursor: "pointer" }} />
        </Box>
       
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              "& span": {
                color: "white",
                transition: "0.3s",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "orange",
                },
              },
            }}
          >
            {/* <KeyboardArrowRightIcon
              sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
            /> */}
            <span style={{borderBottom:"1px solid orange "}}>About us</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              "& span": {
                color: "white",
                transition: "0.3s",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "orange",
                },
              },
            }}
          >
            {/* <KeyboardArrowRightIcon
              sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
            /> */}
            <span style={{borderBottom:"1px solid orange "}}>Privacy policy</span>
          </Box>
          <Box
            sx={{
              display: "flex",
              "& span": {
                color: "white",
                transition: "0.3s",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "orange",
                },
              },
            }}
          >
            {/* <KeyboardArrowRightIcon
              sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
            /> */}
            <span style={{borderBottom:"1px solid orange "}}>Terms of service</span>
          </Box>
        </Box>
        <Box
          sx={{
            "& .copyright": {
              textAlign: "center",
              color: "white",
              fontFamily: '"Nunito", sans-serif',
              fontSize: "14px",
            },
            // "& .credits": {
            //   paddingTop: "10px",
              // textAlign: "center",
            //   fontSize: "13px",
            //   color: "white",
            //   "& a": {
            //     color: "orange",
            //     textDecoration: "none",
            //   },
            // },
          }}
        >
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>LOGO</span>
            </strong>
            . All Rights Reserved
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
