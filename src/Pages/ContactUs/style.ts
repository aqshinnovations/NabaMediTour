import { colors } from "../../styles/colors";

export const styles = {
  section: {
    background: colors.iceBlue,
    py: { xs: 6, md: 8 },
  },

  infoCard: {
    p: 4,
    borderRadius: 4,
    mb: 3,
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 2,
    background: colors.lightBlue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.msBlue,
    mb: 2,
  },

  cardTitle: {
    fontWeight: 700,
    fontSize: 16,
    mb: 1,
  },

  cardSubtitle: {
    color: "text.secondary",
    mt: 1,
  },

  formCard: {
    p: { xs: 3, md: 5 },
    borderRadius: 4,
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
  },

  formTitle: {
    fontSize: 24,
    fontWeight: 700,
  },

  formDescription: {
    color: "text.secondary",
    mb: 4,
  },

  uploadTitle: {
    fontWeight: 600,
    mb: 1,
  },

  uploadBox: {
    border: `2px dashed ${colors.gray}`,
    borderRadius: 2,
    py: 2.5,
    px: 3,
    display: "flex",
    alignItems: "center",
    gap: 2,
    cursor: "pointer",
  },

  uploadText: {
    color: "text.secondary",
  },

  submitButton: {
    mt: 1,
    py: 2,
    borderRadius: 2,
    background: colors.msBlue,
    textTransform: "none",
    fontSize: 18,

    "&:hover": {
      background: colors.msBlue,
    },
  },
};
