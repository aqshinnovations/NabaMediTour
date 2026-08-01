import { borderRadius } from "../../../../styles/borders";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  hero: (image: string) => ({
    height: "340px",
    backgroundImage: `linear-gradient(
      rgba(0,0,0,.55),
      rgba(0,0,0,.55)
    ), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  }),

  heroContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    color: colors.white,
    px: spacing.base,
  },

  backLink: {
    color: colors.mintGreen,
    textDecoration: "none",
  },

  heroTitle: {
    fontWeight: fontWeights.bold,
    mt: spacing.md,
  },

  location: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
    mt: spacing.sm,
    color: colors.white,
  },

  content: {
    maxWidth: "1200px",
    margin: `${spacing.xxxl} auto`,
    px: spacing.base,
  },

  description: {
    fontSize: fontSizes.base,
    lineHeight: 1.8,
    color: colors.textPrimary,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: spacing.xxxl,
    mt: spacing.xxxl,
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.lg,
    mb: spacing.lg,
  },

  facility: {
    mb: spacing.md,
    fontSize: fontSizes.base,
  },

  chips: {
    display: "flex",
    gap: spacing.md,
    flexWrap: "wrap",
  },

  chip: {
    bgcolor: colors.iceBlue,
    color: colors.primaryTeal,
    borderRadius: borderRadius.xl,
    fontSize: fontSizes.base,
  },

  facilityIcon: {
    color: colors.primaryTeal,
  },
};
