import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const items = [
  "footer.cardiology",
  "footer.orthopedics",
  "footer.oncology",
  "footer.neurology",
  "footer.cosmeticSurgery",
];

const TreatmentsSection = () => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 6, md: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="#fff" fontWeight={600}>
          {t("footer.treatments")}
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

export default TreatmentsSection;
