import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { CSSProperties } from "react";
import { sizes } from "../../styles/sizes";
import { borderRadius } from "../../styles/borders";
import { fontSizes } from "../../styles/fontSizes";
import { borders } from "../../styles/borders";
import { colors } from "../../styles/colors";

type SearchItemProps = {
  items: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
};

const IMCSearch: React.FC<SearchItemProps> = ({
  placeholder = "Search...",
  onSelect,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.primary }} />
              </InputAdornment>
            ),
            style: styles.input,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: sizes.height.base,
            borderRadius: borderRadius.lg,
            fontSize: fontSizes.lg,
            border: borders.thin,
            backgroundColor: colors.darkTeal,
          },
        }}
      />
    </Box>
  );
};

const styles: Record<string, CSSProperties> = {
  input: {
    height: sizes.height.base,
    fontSize: fontSizes.base,
    borderRadius: borderRadius.lg,
    border: borders.thin,
    borderColor: colors.black,
    background: colors.white,
  },
};

export default IMCSearch;
