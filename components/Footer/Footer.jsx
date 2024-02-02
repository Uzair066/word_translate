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
      {/* <Box
        sx={{
          backgroundColor: "#333",
          borderTop: "1px solid #333",
          padding: "60px 0 30px 0",
        }}
      > */}
      {/* <Container maxWidth="lg">
          <Grid container columnSpacing={2}>
            <Grid
              item
              xs={12}
              lg={5}
              sx={{
                marginBottom: "30px",
                "& span": {
                  fontSize: "30px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "orange",
                  fontFamily: '"Nunito", sans-serif',
                  marginTop: "3px",
                },
                "& p": {
                  fontFamily: '"Nunito", sans-serif',
                  margin: "unset",
                  color: "white",
                },
              }}
            >
              <span>LOGO</span>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  marginTop: "1rem",
                }}
              >
                <TwitterIcon sx={{ color: "white", cursor: "pointer" }} />
                <FacebookOutlinedIcon
                  sx={{ color: "white", cursor: "pointer" }}
                />
                <InstagramIcon sx={{ color: "white", cursor: "pointer" }} />
                <LinkedInIcon sx={{ color: "white", cursor: "pointer" }} />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              lg={2}
              sx={{
                marginBottom: "30px",
                "& h4": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "orange",
                  fontFamily: '"Nunito", sans-serif',
                  textTransform: "uppercase",
                  position: "relative",
                  paddingBottom: "12px",
                  margin: "unset",
                  marginBottom: "0.5rem",
                },
              }}
            >
              <h4>Useful Links</h4>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Home</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>About us</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Services</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Terms of service</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Privacy policy</span>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              lg={2}
              sx={{
                marginBottom: "30px",
                "& h4": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "orange",
                  fontFamily: '"Nunito", sans-serif',
                  textTransform: "uppercase",
                  position: "relative",
                  paddingBottom: "12px",
                  margin: "unset",
                  marginBottom: "0.5rem",
                },
              }}
            >
              <h4>OUR SERVICES</h4>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Web Design</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Web Development</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Product Management</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Marketing</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0 10px 0",
                  "& span": {
                    color: "white",
                    transition: "0.3s",
                    lineHeight: 1,
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "14px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "orange",
                    },
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "orange", fontSize: "22px", lineHeight: 0 }}
                />
                <span>Graphic Design</span>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={3}
              sx={{
                "& h4": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "orange",
                  fontFamily: '"Nunito", sans-serif',
                  textTransform: "uppercase",
                  position: "relative",
                  paddingBottom: "12px",
                  margin: "unset",
                  marginBottom: "0.5rem",
                },
                "& p": {
                  fontFamily: '"Nunito", sans-serif',
                  margin: "unset",
                  marginBottom: "1rem",
                  fontSize: "14px",
                  lineHeight: "26px",
                  color: "white",
                },
                "& strong": {
                  color: "orange",
                },
              }}
            >
              <h4>CONTACT US</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </Grid>
          </Grid>
        </Container> */}
      {/* </Box> */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#333",
          flexWrap:'wrap',
          gap:5,
          borderTop: "1px solid #333",
          padding: "60px 0px 30px 0px",
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
