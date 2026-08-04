import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { spacing } from "../../styles/spacing";

export const styles = {
  card: {
    height: "100%",
    borderRadius: 4,
    overflow: "hidden",
    bgcolor: colors.white,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all .3s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 30px rgba(0,0,0,.12)",

      "& img": {
        transform: "scale(1.05)",
      },
    },
  },

  imageWrapper: {
    overflow: "hidden",
    height: {
      xs: 200,
      sm: 220,
      md: 230,
    },
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s ease",
  },

  content: {
    p: spacing.lg,
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  },

  title: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
    color: colors.primaryDarkBlue,
  },

  description: {
    color: colors.secondary,
    fontSize: fontSizes.md,
    lineHeight: 1.7,

    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    minHeight: 82,
  },

  link: {
    mt: "auto",
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    color: colors.teal,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.md,
    cursor: "pointer",

    "&:hover": {
      color: colors.darkTeal,
    },
  },
};
