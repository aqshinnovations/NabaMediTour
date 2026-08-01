import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  section: {
    backgroundColor: colors.secondaryTeal,
    py: {
      xs: spacing.xxl,
      md: spacing.xxxl,
    },
  },

  container: {
    maxWidth: "1200px",
    mx: "auto",
    px: {
      xs: spacing.md,
      md: spacing.xl,
    },
  },

  item: {
    textAlign: "center",
  },

  number: {
    color: colors.white,
    fontWeight: fontWeights.bold,
    fontSize: {
      xs: fontSizes.xl,
      md: fontSizes.xxl,
    },
    lineHeight: 1,
    mb: spacing.sm,
  },

  title: {
    color: colors.white,
    fontSize: {
      xs: fontSizes.base,
      md: fontSizes.md,
    },
    fontWeight: fontWeights.regular,
    opacity: 0.95,
  },
};
