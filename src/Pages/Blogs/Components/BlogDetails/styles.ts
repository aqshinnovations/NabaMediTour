import { borderRadius } from "../../../../styles/borders";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  notFound: {
    padding: spacing.xxxl,
  },

  container: {
    maxWidth: "900px",
    margin: `${spacing.xxxl} auto`,
    padding: `0 ${spacing.base}`,
  },

  backButton: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: "pointer",
    color: colors.primary,
    marginBottom: spacing.xl,
  },

  image: {
    width: "100%",
    height: "450px",
    objectFit: "cover" as const,
    borderRadius: borderRadius.lg,
  },

  metaContainer: {
    display: "flex",
    gap: spacing.xl,
    marginTop: spacing.xl,
    color: colors.textSecondary,
    flexWrap: "wrap" as const,
  },

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
  },

  title: {
    marginTop: spacing.xl,
    marginBottom: spacing.base,
  },

  content: {
    lineHeight: 1.9,
    color: colors.textSecondary,
    fontSize: fontSizes.md,
  },
};
