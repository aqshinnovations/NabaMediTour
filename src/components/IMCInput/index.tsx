import React from "react";
import type { SxProps } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { fontSizes } from "../../styles/fontSizes";

export interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  fontSize?: string | number;
  fontWeight?: "normal" | "bold" | number;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  multiline?: boolean;

  rows?: number;
}

const IMCInput: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  fullWidth = true,
  fontSize = fontSizes.sm,
  fontWeight = "normal",
  padding = spacing.md,
  margin = spacing.xs,
  borderRadius = spacing.sm,
  borderColor = colors.darkTeal,
  backgroundColor = "#fff",
  textColor = colors.black,
  multiline = false,
  rows = 4,
}) => {
  const sx: SxProps = {
    input: {
      fontSize,
      fontWeight,
      color: textColor,
      padding,
      backgroundColor,
      borderRadius,
      "&::placeholder": {
        color: "#888",
        opacity: 1,
      },
    },
    "& .MuiOutlinedInput-root": {
      borderRadius,
      backgroundColor,
      "& fieldset": {
        borderColor,
      },
      "&:hover fieldset": {
        borderColor,
      },
      "&.Mui-focused fieldset": {
        borderColor,
      },
    },
    margin,
  };

  return (
    <Box sx={{ marginBottom: spacing.md }}>
      <TextField
        fullWidth={fullWidth}
        type={type}
        name={name}
        id={name}
        label={label}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={sx}
        multiline={multiline}
        rows={multiline ? rows : undefined}
      />
    </Box>
  );
};

export default IMCInput;
