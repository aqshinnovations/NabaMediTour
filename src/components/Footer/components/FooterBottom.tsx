import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
    >
      <Typography sx={{ color: "#94A3B8" }}>{t("footer.copyright")}</Typography>

      <Stack direction="row" spacing={4}>
        <Typography
          sx={{
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          {t("footer.privacyPolicy")}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          {t("footer.termsOfService")}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterBottom;
