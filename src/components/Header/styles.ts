import type { SxProps, Theme } from "@mui/material";
import { borderRadius } from "../../styles/borders";
import { colors } from "../../styles/colors";
import { fontWeights } from "../../styles/fontWeights";
import { sizes } from "../../styles/sizes";
import { spacing } from "../../styles/spacing";

export const headerBoxStyle = {
  backgroundColor: colors.primaryLight,
  padding: spacing.md,
  margin: spacing.none,
};

export const desktopNavContainerStyle: SxProps<Theme> = {
  display: "flex",
  gap: 2,
};

export const navButtonStyle: SxProps<Theme> = {
  fontWeight: fontWeights.semiBold,
  textTransform: "none",
  color: colors.teal,
  "&:hover": {
    backgroundColor: colors.primary,
    color: colors.white,
  },
};

export const mobileMenuIconStyle: SxProps<Theme> = {
  color: colors.primary,
};

export const drawerPaperBoxStyle: SxProps<Theme> = {
  width: 250,
  padding: 2,
  backgroundColor: colors.white,
  height: "100%",
};

export const drawerCloseRowStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  mb: 2,
};

export const drawerSubItemStyle: SxProps<Theme> = {
  pl: 4,
};

export const languageBoxStyle = {
  backgroundColor: colors.transparent,
  margin: spacing.none,
  padding: spacing.none,
};

// Kept for parity with the original commented-out consultButton style.
export const consultButtonStyle: SxProps<Theme> = {
  height: sizes.height.base,
  borderRadius: borderRadius.lg,
};

// Helper: primary label style used for the mobile "Home" item, since it's
// the only one that changes weight/color based on the active route.
export const getHomeLabelStyle = (isActive: boolean): SxProps<Theme> => ({
  fontWeight: isActive ? fontWeights.bold : fontWeights.regular,
  color: isActive ? colors.primaryDarkBlue : colors.teal,
});
