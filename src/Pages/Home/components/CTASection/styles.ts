import { borderRadius } from "../../../../styles/borders";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  section: {
    background: "linear-gradient(180deg, #0F999C 0%, #0E8C97 100%)",
    py: {
      xs: spacing.xxxl,
      md: "80px", // spacing doesn't have 80px
    },
    textAlign: "center",
  },

  container: {
    maxWidth: "1200px",
  },

  stars: {
    color: colors.msYellow,
    display: "flex",
    justifyContent: "center",
    gap: spacing.xs,
    mb: spacing.lg,
  },

  title: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: {
      xs: fontSizes.lg,
      md: fontSizes.xl,
    },
    mb: spacing.md,
  },

  subtitle: {
    color: colors.white,
    fontSize: {
      xs: fontSizes.md,
      md: fontSizes.md,
    },
    maxWidth: "850px",
    mx: "auto",
    mb: spacing.xxl,
    lineHeight: 1.6,
  },

  button: {
    backgroundColor: colors.white,
    color: colors.secondaryTeal,
    borderRadius: borderRadius.lg,
    px: spacing.sm,
    py: spacing.sm,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    textTransform: "none",
    minWidth: "250px",
    boxShadow: shadows.heavy,
    transition: "0.3s",

    "&:hover": {
      backgroundColor: colors.white,
      transform: "translateY(-3px)",
      boxShadow: shadows.heavy,
    },
  },

  arrow: {
    ml: spacing.xs,
    fontSize: fontSizes.lg,
  },
};
