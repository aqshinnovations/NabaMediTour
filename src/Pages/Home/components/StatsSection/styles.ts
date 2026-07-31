import { colors } from "../../../../styles/colors";

export const styles = {
  section: {
    backgroundColor: colors.secondaryTeal,
    py: {
      xs: 6,
      md: 8,
    },
  },

  container: {
    maxWidth: "1200px",
    mx: "auto",
    px: 2,
  },

  item: {
    textAlign: "center",
  },

  number: {
    color: colors.white,
    fontWeight: 700,
    fontSize: {
      xs: "2.2rem",
      md: "3.2rem",
    },
    lineHeight: 1,
    mb: 1,
  },

  title: {
    color: colors.white,
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    fontWeight: 400,
    opacity: 0.95,
  },
};
