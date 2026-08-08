import type { SxProps, Theme } from "@mui/material";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { spacing } from "../../../../styles/spacing";
import { fontWeights } from "../../../../styles/fontWeights";
import type { CSSProperties } from "react";

export const styles: Record<string, SxProps<Theme>> = {
  heroContainer: {
    mx: "auto",
    px: 3,
    py: 5,
    background: colors.primaryTeal,
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "400px 1fr",
    },
    gap: 4,
    alignItems: "center",
  },

  hospitalImage: {
    width: "100%",
    height: {
      xs: 250,
      md: 350,
    },
    objectFit: "cover",
    borderRadius: 3,
    boxShadow: 3,
  },

  hospitalInfo: {
    display: "flex",
    flexDirection: "column",
  },

  backButton: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    cursor: "pointer",
    width: "fit-content",
    mb: 2,
  },

  backText: {
    cursor: "pointer",
  },

  hospitalTitle: {
    fontWeight: fontWeights.bold,
    color: colors.white,
  },

  location: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
    mt: 2,
  },

  content: {
    px: spacing.xxxl,
    py: 4,
    maxWidth: "1200px",
  },

  description: {
    mb: 4,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: 4,
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 2,
  },

  facilityIcon: {
    color: colors.primaryDarkBlue,
    fontSize: fontSizes.md,
  },

  facilityItem: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 1,
  },

  facilityCheckIcon: {
    color: colors.primary,
    fontSize: 20,
    flexShrink: 0,
  },

  facility: {
    flex: 1,
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },

  chip: {
    borderRadius: 2,
  },

  proceduresSection: {
    px: spacing.base,
    py: 4,
    background: colors.lightBlue,
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2, 1fr)",
      sm: "repeat(3, 1fr)",
      md: "repeat(4, 1fr)",
      lg: "repeat(6, 1fr)",
    },
    gap: 2,
    mt: 3,
  },

  doctorsSection: {
    px: spacing.base,
    py: 4,
  },
};
export const backTextStyle: CSSProperties = {
  cursor: "pointer",
};
export const backButtonStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  width: "fit-content",
  marginBottom: "16px",
};
