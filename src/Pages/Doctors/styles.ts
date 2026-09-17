import { borderRadius } from "../../styles/borders";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fontSizes";
import { spacing } from "../../styles/spacing";

export const styles = {
  // filterSection: {
  //   py: spacing.xxl,
  //   display: "flex",
  //   justifyContent: "center",
  //   flexWrap: "wrap",
  //   gap: spacing.md,
  //   backgroundColor: colors.white,
  // },

  chip: {
    borderRadius: borderRadius.lg,
    px: spacing.sm,
    py: spacing.base,
    fontSize: fontSizes.sm,
  },

  doctorsSection: {
    backgroundColor: colors.light,
    py: spacing.sm,
  },

  grid: {
    maxWidth: "1400px",
    mx: "auto",

    px: {
      xs: spacing.none,
      md: spacing.none,
    },
  },
  categoryDropdown: {
    width: "100%",
    maxWidth: "420px",

    "& .MuiOutlinedInput-root": {
      minHeight: "52px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      paddingRight: "12px",

      "& fieldset": {
        borderColor: "#D9E5E5",
      },

      "&:hover fieldset": {
        borderColor: "#9FC8C8",
      },

      "&.Mui-focused fieldset": {
        borderColor: "primaryTeal",
        borderWidth: "1px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "#6B7A7A",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "primaryTeal",
    },

    "& .MuiAutocomplete-input": {
      padding: "4px 8px !important",
    },

    "& .MuiAutocomplete-popupIndicator": {
      color: "primaryTeal",
    },
  },

  filterSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    backgroundColor: "#F7FBFB",
  },
};
