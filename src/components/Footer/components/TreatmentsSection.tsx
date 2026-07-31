import { Grid, Stack, Typography } from "@mui/material";

const items = [
  "Cardiology",
  "Orthopedics",
  "Oncology",
  "Neurology",
  "Cosmetic Surgery",
];

const TreatmentsSection = () => {
  return (
    <Grid size={{ xs: 6, md: 2 }}>
      <Stack spacing={2}>
        <Typography fontWeight={700}>Treatments</Typography>

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
            {item}
          </Typography>
        ))}
      </Stack>
    </Grid>
  );
};

export default TreatmentsSection;
