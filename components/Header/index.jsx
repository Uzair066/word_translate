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
            <AdbIcon
              sx={{ fill: "black", display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },

                textDecoration: "none",
                fontSize: "30px",
                fontWeight: "700",
                letterSpacing: "1px",
                color: "white",
                fontFamily: '"Nunito", sans-serif',
              }}
            >
              LOGO
            </Typography>

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
                  <MenuItem
                    key={page}
                    onClick={() => {
                      {handleCloseNavMenu();
                        setIsPageLoaded(false)
                        setIsPageLoaded(false);
                        setTimeout(() => {
                          if (page === "Home") router.push("/");
                          if (page === "About Us") router.push("/about");
                        }, 1000);
                     
                    }}}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      setIsPageLoaded(false)
                      setTimeout(() => {
                        router.push("/top200");
                      }, 1000);
                    }}
                  >
                    <Typography textAlign="center">Top 200</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                textDecoration: "none",
                fontSize: "30px",
                fontWeight: "700",
                letterSpacing: "1px",
                color: "white",
                fontFamily: '"Nunito", sans-serif',
              }}
            >
              LOGO
            </Typography>
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
                  onClick={() => {
                    handleCloseNavMenu();
                    setIsPageLoaded(false);
                        setTimeout(() => {
                          if (page === "Home") router.push("/");
                          if (page === "About Us") router.push("/about");
                        }, 1000);
                  }}
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
              ))}
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    setIsPageLoaded(false)
                    setTimeout(() => {
                      router.push("/top200");
                    }, 1000);
                  }}
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
                    backgroundColor:"orange",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor:"orange"
                    },
                  }}
                >
                  Top 200
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
