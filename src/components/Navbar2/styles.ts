import type { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../styles/colors";
export const navbarStyle: SxProps<Theme> = {
  position: "sticky",
  top: 0,
  zIndex: 1200,
  bgcolor: colors.white,
  px: {
    xs: 2,
    md: 6,
  },
  py: 1.5,
  borderBottom: "1px solid #eee",
};

export const navContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  fontWeight: 700,
  fontSize: 24,
};

export const desktopMenu = {
  display: {
    xs: "none",
    md: "flex",
  },
  gap: 1,
  alignItems: "center",
};

export const navButton = {
  px: 2,
  py: 1,
  borderRadius: 2,
  color: "#374151",
  textTransform: "none",
  fontWeight: 500,

  "&:hover": {
    bgcolor: colors.white,
    color: colors.msBlue,
  },
};

export const activeButton = {
  bgcolor: colors.white,
  color: colors.msBlue,

  "&:hover": {
    bgcolor: colors.white,
  },
};

export const consultationButton = {
  bgcolor: colors.msBlue,
  color: colors.white,
  textTransform: "none",
  borderRadius: 2,
  px: 3,

  "&:hover": {
    bgcolor: colors.msBlue,
  },
};

export const mobileMenu = {
  display: {
    xs: "block",
    md: "none",
  },
};

export const drawerPaper = {
  width: 280,
  p: 2,
};

export const drawerItem = {
  borderRadius: 2,
  mb: 1,
};

export const activeDrawer = {
  bgcolor: colors.white,
  color: colors.msBlue,
};
