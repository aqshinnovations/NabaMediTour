import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";

export const styles = {
  section: {
    width: "100%",
    padding: {
      xs: spacing.xl,
      md: spacing.xxxl,
    },
    backgroundColor: colors.background,
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: spacing.xxxl,
    alignItems: "center",
  },

  description: {
    maxWidth: "700px",
    margin: "0 auto",
  },

  locations: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "repeat(4, 1fr)",
    },
    gap: spacing.lg,
  },

  locationCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    padding: spacing.xl,
    borderRadius: spacing.md,
    backgroundColor: "#fff",
    border: `1px solid ${colors.lightTeal}`,
    transition: "all 0.3s ease",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: 3,
    },
  },

  iconWrapper: {
    width: spacing.xxl,
    height: spacing.xxl,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightBlue,
    flexShrink: 0,
  },

  locationName: {
    color: colors.primaryDarkBlue,
  },
};
