import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { navItems } from "./constants";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  navbarStyle,
  navContainer,
  desktopMenu,
  logoContainer,
  navButton,
  activeButton,
  consultationButton,
  mobileMenu,
  drawerPaper,
  drawerItem,
  activeDrawer,
} from "./styles";
import { useTranslation } from "react-i18next";
import { spacing } from "../../styles/spacing";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar elevation={0} sx={navbarStyle}>
        <Toolbar sx={navContainer}>
          <Box sx={logoContainer}>
            <Box
              component="img"
              src={logo}
              alt="Naba Medi Tour"
              sx={{
                height: {
                  xs: 42,
                  md: 56,
                },
                width: "auto",
                objectFit: "contain",
              }}
            />

            <Typography fontWeight={700} color="#1F2937">
              {t("navbar.brand")}
            </Typography>
          </Box>

          {!mobile && (
            <>
              <Box sx={desktopMenu}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                      ...navButton,
                      ...(location.pathname === item.path ? activeButton : {}),
                    }}
                  >
                    {t(item.label)}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  mt: 2,
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <LanguageSwitcher />
              </Box>
              <Button
                onClick={() => navigate("/contactUs")}
                startIcon={<PhoneOutlinedIcon style={{ margin: spacing.sm }} />}
                sx={consultationButton}
              >
                {t("navbar.consultation")}
              </Button>
            </>
          )}

          {mobile && (
            <IconButton onClick={() => setOpen(true)} sx={mobileMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={drawerPaper}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                sx={{
                  ...drawerItem,
                  ...(location.pathname === item.path ? activeDrawer : {}),
                }}
              >
                <ListItemText primary={t(item.label)} />
              </ListItemButton>
            ))}
            <Box
              sx={{
                mt: 2,
                mb: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LanguageSwitcher />
            </Box>
            <Button
              fullWidth
              startIcon={<PhoneOutlinedIcon />}
              sx={{
                ...consultationButton,
                mt: 2,
              }}
              onClick={() => {
                setOpen(false);
                navigate("/contactUs");
              }}
            >
              {t("navbar.consultation")}
            </Button>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
