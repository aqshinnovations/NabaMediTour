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
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    color: colors.white,
    cursor: "pointer",
    marginBottom: spacing.xl,
  },
  backText: {
    opacity: 0.9,
  },
  description: {
    fontSize: fontSizes.base,
    lineHeight: 1.8,
    color: colors.textPrimary,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr", // 1 column on mobile
      sm: "repeat(2, 1fr)", // 2 columns on small screens
      md: "repeat(3, 1fr)", // 3 columns on medium and above
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
