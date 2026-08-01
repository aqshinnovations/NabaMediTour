import { spacing } from "../../styles/spacing";
export const styles = {
  hospitalsContainer: {
    maxWidth: "1280px",
    margin: `${spacing.xxxl} auto`,
    padding: `0 ${spacing.base}`,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
    gap: spacing.lg,
  },
};
