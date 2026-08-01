import { colors } from "../styles/colors";
import { fontWeights } from "../styles/fontWeights";
import { fontSizes } from "../styles/fontSizes";

export const commonStyles = {
  sectionTitle: {
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.ultraBold,
    color: colors.msBlue,
    lineHeight: 1,
    textAlign: "center" as const,
    marginTop: "14px",
    marginBottom: "14px",
    width: "100%",
  },
  sectionContainer: {
    width: "100%",
    padding: "30px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background: "#000",
  },
  exploreMoreContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    width: "100%",
  },
  exploreMoreButton: {
    px: 4,
    py: 1.5,
    borderRadius: "30px",
    textTransform: "none" as const,
    backgroundColor: colors.msBlue,
    "&:hover": {
      backgroundColor: colors.msBlue,
    },
  },
};
