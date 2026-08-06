import { colors } from "../../styles/colors";

export const styles = {
  section: {
    py: 8,
    background: colors.lightBlue,
  },

  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },

  content: {
    maxWidth: 700,
  },

  buttonStack: {
    flexDirection: { xs: "column", sm: "row" },
    gap: 1,
  },

  consultationButton: {
    bgcolor: colors.msBlue,
    color: colors.white,
    gap: 1,

    whiteSpace: "nowrap",
    "&:hover": {
      bgcolor: colors.primaryDarkBlue,
    },
  },

  whatsappButton: {
    bgcolor: colors.WhatsApp,
    color: colors.white,

    gap: 1,
    "&:hover": {
      bgcolor: colors.WhatsApp,
    },
  },
};
