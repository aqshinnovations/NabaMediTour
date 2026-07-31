import { colors } from "../../styles/colors";

export const styles = {
  card: {
    borderRadius: "16px",
    overflow: "hidden",
    background: colors.white,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "0.3s",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
  },

  content: {
    padding: "18px",
  },
};
