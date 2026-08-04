import { FormControl, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../utils/session";
import type { SelectChangeEvent } from "@mui/material/Select";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    const lang = event.target.value;

    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <FormControl size="small">
      <Select
        value={i18n.language}
        onChange={handleChange}
        sx={{
          minWidth: 120,
          height: 40,
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar">العربية</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
