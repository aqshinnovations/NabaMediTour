import { Stack, Typography } from "@mui/material";

const FooterBottom = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
    >
      <Typography color="#94A3B8">
        © 2026 Nabameditour. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={4}>
        <Typography
          sx={{
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          Terms of Service
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterBottom;
