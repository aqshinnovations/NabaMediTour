import { borderRadius } from "../../styles/borders";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fontSizes";
import { spacing } from "../../styles/spacing";

export const styles = {
  filterSection: {
    py: spacing.xxl,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: spacing.md,
    backgroundColor: colors.white,
  },

  chip: {
    borderRadius: borderRadius.lg,
    px: spacing.sm,
    py: spacing.base,
    fontSize: fontSizes.sm,
  },

  doctorsSection: {
    backgroundColor: colors.light,
    py: spacing.sm,
  },

  grid: {
    maxWidth: "1200px",
    mx: "auto",
    px: {
      xs: spacing.md,
      md: spacing.none,
    },
  },
};
