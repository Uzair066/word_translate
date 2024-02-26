import React, { useEffect } from "react";
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
import Image from "next/image";

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
  };
  useEffect(() => {
    setMode(theme);
  }, [theme]);

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
                //   color="black"
              >
                <MenuIcon />
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
                  <MenuItem key={page} onClick={() => handleCloseNavMenu()}>
                    <a
                      textAlign="center"
                      href={page === "Home" ? "/" : "/about"}
                      onClick={() => setIsPageLoaded(false)}
                    >
                      {page}
                    </a>
                  </MenuItem>
                ))}
                <MenuItem onClick={() => handleCloseNavMenu()}>
                  <a
                    textAlign="center"
                    href="/top200"
                    onClick={() => setIsPageLoaded(false)}
                  >
                    Top 200
                  </a>
                </MenuItem>
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
                  <a
                    textAlign="center"
                    href={page === "Home" ? "/" : "/about"}
                    onClick={() => setIsPageLoaded(false)}
                  >
                    {page}
                  </a>
                </Button>
              ))}
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
                <a
                  textAlign="center"
                  href="/top200"
                  onClick={() => setIsPageLoaded(false)}
                >
                  Top 200
                </a>
              </Button>
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

            {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
