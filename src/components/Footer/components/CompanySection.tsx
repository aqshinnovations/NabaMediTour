import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const items = [
  "footer.hospitals",
  "footer.doctors",
  "footer.technology",
  "footer.blog",
  "footer.contact",
];

const CompanySection = () => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 6, md: 2 }}>
      <Stack spacing={1}>
        <Typography fontWeight={700} color="#fff">
          {t("footer.company")}
        </Typography>

        {items.map((item) => (
          <Typography
            key={item}
            sx={{
              color: "#A0AEC0",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            {t(item)}
          </Typography>
        ))}
      </Stack>
    </Grid>
  );
};

export default CompanySection;
