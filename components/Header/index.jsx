import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Message_data } from "../../context/context";
import { useContext } from "react";
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircleIcon from '@mui/icons-material/Circle';
import { Circle } from "@mui/icons-material";

const pages = ["Home", "About Us", "Blog"];
export const HeaderMain = ({ setMode }) => {
  const router = useRouter();
  const { theme, setTheme, setIsPageLoaded } = useContext(Message_data);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileDD(false)
  };
  useEffect(() => {
    setMode(theme);
  }, [theme]);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  const [mobileDD, setMobileDD] = useState(false);
  const handleMobileTranslate = () => {
    setMobileDD(!mobileDD);
  };
  const handleMobileTranslateLink = () => {
    handleCloseNavMenu()
    setIsPageLoaded(false)
  };
  const menuItems = [
    {
      items: [
        { title: "English to Hindi", link: "/translator/english-to-hindi" },
        { title: "English to Bengali", link: "/translator/english-to-bengali" },
        {
          title: "English to Malayalam",
          link: "/translator/english-to-malayalam",
        },
        { title: "English to Urdu", link: "/translator/english-to-urdu" },
      ],
    },
    {
      items: [
        { title: "English to Tamil", link: "/translator/english-to-tamil" },
        { title: "English to Kannada", link: "/translator/english-to-kannada" },
        {
          title: "English to Gujarati",
          link: "/translator/english-to-gujarati",
        },
      ],
    },
    {
      items: [
        { title: "English to Telugu", link: "/translator/english-to-telugu" },
        { title: "English to Marathi", link: "/translator/english-to-marathi" },
        {
          title: "English to Punjabi",
          link: "/translator/english-to-punjabi",
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        "& .MuiAppBar-colorPrimary": {
          background: "#333",

          position: "fixed",

          transition: "0.5s",
        },
      }}
    >
      <AppBar sx={{ boxShadow: "none" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "155px",
                height: "50px",
                "& img": {
                  width: "auto !important",
                  height: "50px !important",
                },
              }}
            >
              <a href="/" onClick={() => setIsPageLoaded(false)}>
                <img src={"/BrowseLogo.png"} alt="logo" />
              </a>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                  style: {
                    width: "100%",
                  },
                }}
              >
                {pages.map((page) => (
                  <a
                    textAlign="center"
                    href={page === "Home" ? "/" : "/about/"}
                    onClick={() => setIsPageLoaded(false)}
                    key={page}
                  >
                    <MenuItem onClick={() => handleCloseNavMenu()}>
                      {page}
                    </MenuItem>
                  </a>
                ))}
                <a
                  textAlign="center"
                  href="/top200"
                  onClick={() => setIsPageLoaded(false)}
                >
                  <MenuItem onClick={() => handleCloseNavMenu()}>
                    Top 200
                  </MenuItem>
                </a>
                <MenuItem
                  onClick={() => {
                    handleMobileTranslate();
                  }}
                  sx={{display:"flex", justifyContent:"space-between"}}
                >
                  Translate{" "}
                  <span style={{ display: "flex", float: "right" }}>
                    {" "}
                    {mobileDD ? (
                      <KeyboardArrowDownIcon sx={{color:"orange" }}/>
                    ) : (
                      <KeyboardArrowRightIcon sx={{color:"orange" }}/>
                    )}
                  </span>
                </MenuItem>
                
                  <div className={mobileDD ? 'mobile-menu-open' : 'mobile-menu-closed'}>
                  {mobileDD && (
                    <>
                    {menuItems.map((column, index) =>
                      column.items.map((item, i) => (
                        <a href={item.link} key={i}>
                          <MenuItem
                            sx={{ ml: 5, color:"orange"}}
                            onClick={handleMobileTranslateLink}
                            key={i}
                          >
                          <CircleIcon sx={{color:"orange", fontSize:"10px", mr:2}}/>
                           <span> {item.title} </span>
                          </MenuItem>
                        </a>
                      ))
                    )}
                    </>
                    )}
                    </div>
                  {/* </> */}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                width: "155px",
                height: "50px",
                "& img": {
                  width: "auto !important",
                  height: "50px !important",
                },
              }}
            >
              <a href="/" onClick={() => setIsPageLoaded(false)}>
                <img src={"/BrowseLogo.png"} alt="logo" />
              </a>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3,
              }}
            >
              {pages.map((page) => (
                <a
                  textAlign="center"
                  href={page === "Home" ? "/" : "/about"}
                  onClick={() => setIsPageLoaded(false)}
                  key={page}
                >
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu()}
                    sx={{
                      // my: 2,
                      display: "block",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "white",
                      whiteSpace: "nowrap",
                      transition: "0.3s",
                      textTransform: "none",
                      fontFamily: '"Nunito", sans-serif',
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </a>
              ))}

              <div className="menu-container">
                <Button
                  onMouseEnter={handleMouseEnter}
                  sx={{
                    // my: 2,
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                    textTransform: "none",
                    fontFamily: '"Nunito", sans-serif',
                    // backgroundColor: "orange",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  Translator{" "}
                  <span style={{ display: "flex", float: "right" }}>
                    {" "}
                    <KeyboardArrowDownIcon />
                  </span>
                </Button>
                {isOpen && (
                  <div className="custom-menu" onMouseLeave={handleMouseLeave}>
                    {menuItems.map((column, index) => (
                      <div key={index} className="menu-column">
                        <ul>
                          {column.items.map((item, i) => (
                            <a href={item.link}>
                              {" "}
                              <li key={i}>{item.title}</li>{" "}
                            </a>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a
                textAlign="center"
                href="/top200"
                onClick={() => setIsPageLoaded(false)}
              >
                <Button
                  onClick={() => handleCloseNavMenu()}
                  sx={{
                    // my: 2,
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                    textTransform: "none",
                    fontFamily: '"Nunito", sans-serif',
                    backgroundColor: "orange",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "orange",
                    },
                  }}
                >
                  Top 200
                </Button>
              </a>
            </Box>
            {theme === "light" ? (
              <Tooltip title="Dark Mode" placement="left">
                <DarkModeIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setTheme("dark")}
                />
              </Tooltip>
            ) : (
              <Tooltip title="Light Mode" placement="left">
                <WbSunnyIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setTheme("light")}
                />
              </Tooltip>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
