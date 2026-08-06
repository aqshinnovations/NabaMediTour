import { colors } from "../../../../styles/colors";
import { borderRadius } from "../../../../styles/borders";
import { shadows } from "../../../../styles/shadows";

export const styles = {
  section: {
    backgroundColors: colors.danger,
  },

  container: {
    mx: "auto",
    px: 2,
  },

  slide: {
    px: 1,
    mb: 4,
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: borderRadius.lg,
    boxShadow: shadows.insetLight,
  },
};
