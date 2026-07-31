import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link, useLocation } from "react-router-dom";
// import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import IMCBox from "../IMCBox";
import IMCDropDown from "../IMCDropdown";
import { Icons } from "../../styles/icons";
import { setLanguage } from "../../utils/session";
import { navLinks, getLanguageOptions, getMenuOptions } from "./constants";
import {
  headerBoxStyle,
  desktopNavContainerStyle,
  navButtonStyle,
  mobileMenuIconStyle,
  drawerPaperBoxStyle,
  drawerCloseRowStyle,
  languageBoxStyle,
} from "./styles";
import type { AnchorMap, MenuKey } from "./types";

const EMPTY_ANCHORS: AnchorMap = {
  treatments: null,
  transplants: null,
  doctors: null,
  hospitals: null,
};

const Header = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const languageOptions = getLanguageOptions(t);
  const menuOptions = getMenuOptions(t);

  const handleLanguageChange = (value: string | number) => {
    const lang = value.toString();
    setLanguage(lang);
    i18n.changeLanguage(lang).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // Mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  // Mobile: which collapsible sections are expanded

  // Desktop: which flyout menu is anchored/open
  const [anchors, setAnchors] = useState<AnchorMap>(EMPTY_ANCHORS);

  const handleMenuOpen =
    (key: MenuKey) => (event: React.MouseEvent<HTMLElement>) =>
      setAnchors((prev) => ({ ...prev, [key]: event.currentTarget }));

  const handleMenuClose = (key: MenuKey) => () =>
    setAnchors((prev) => ({ ...prev, [key]: null }));

  const handleOptionSelect = (path: string, key: MenuKey) => {
    navigate(path);
    setAnchors((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <IMCBox
      backgroundColor={headerBoxStyle.backgroundColor}
      padding={headerBoxStyle.padding}
      margin={headerBoxStyle.margin}
    >
      <Grid container spacing={2}>
        {" "}
        <Grid size={{ xs: 8, sm: 8, md: 10 }}>
          {!isMobile ? (
            <Box sx={desktopNavContainerStyle}>
              {navLinks.map((link) => {
                if (link.menuKey) {
                  const key = link.menuKey;
                  return (
                    <React.Fragment key={link.path}>
                      <Button
                        onClick={handleMenuOpen(key)}
                        sx={{
                          ...navButtonStyle,
                          ...(menuOptions[key].some((option) =>
                            location.pathname.startsWith(option.path),
                          ) && {
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#1565c0",
                            },
                          }),
                        }}
                      >
                        {t(link.label)}
                      </Button>
                      <Menu
                        anchorEl={anchors[key]}
                        open={Boolean(anchors[key])}
                        onClose={handleMenuClose(key)}
                      >
                        {menuOptions[key].map((option) => (
                          <MenuItem
                            key={option.path}
                            onClick={() => handleOptionSelect(option.path, key)}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  );
                }

                return (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      ...navButtonStyle,
                      ...(location.pathname === link.path && {
                        backgroundColor: "#1976d2", // your primary color
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      }),
                    }}
                  >
                    {t(link.label)}
                  </Button>
                  // <Button
                  //   key={link.path}
                  //   component={Link}
                  //   to={link.path}
                  //   sx={navButtonStyle}
                  // >
                  //   {t(link.label)}
                  // </Button>
                );
              })}
            </Box>
          ) : (
            <>
              <IconButton onClick={handleDrawerToggle} sx={mobileMenuIconStyle}>
                <Icons.Menu />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box sx={drawerPaperBoxStyle}>
                  <Box sx={drawerCloseRowStyle}>
                    <IconButton onClick={handleDrawerToggle}>
                      <Icons.Close />
                    </IconButton>
                  </Box>

                  <List>
                    {navLinks.map((link) => {
                      if (link.menuKey) {
                        const key = link.menuKey;

                        return (
                          <React.Fragment key={link.path}>
                            <ListItemButton onClick={handleMenuOpen(key)}>
                              <ListItemText primary={t(link.label)} />
                            </ListItemButton>

                            <Menu
                              anchorEl={anchors[key]}
                              open={Boolean(anchors[key])}
                              onClose={handleMenuClose(key)}
                            >
                              {menuOptions[key].map((option) => (
                                <MenuItem
                                  key={option.path}
                                  onClick={() => {
                                    handleOptionSelect(option.path, key);
                                    handleDrawerToggle();
                                  }}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Menu>
                          </React.Fragment>
                        );
                      }

                      return (
                        <ListItemButton
                          key={link.path}
                          component={Link}
                          to={link.path}
                          onClick={handleDrawerToggle}
                          selected={location.pathname === link.path}
                        >
                          <ListItemText primary={t(link.label)} />
                        </ListItemButton>
                      );
                    })}
                    {/* <ListItemButton
                      component={Link}
                      to="/Blog"
                      // onClick={handleDrawerToggle}
                      selected={location.pathname === "/Blog"}
                    >
                      <ListItemText primary={t("navbar.blogs")} />
                    </ListItemButton> */}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 2 }}>
          <IMCBox
            backgroundColor={languageBoxStyle.backgroundColor}
            margin={languageBoxStyle.margin}
            padding={languageBoxStyle.padding}
          >
            <IMCDropDown
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              options={languageOptions}
              onSelect={handleLanguageChange}
              placeholder={t("language.placeholder")}
            />
          </IMCBox>
        </Grid>
      </Grid>
    </IMCBox>
  );
};

export default Header;
