import { Grid, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h6" color="#fff" fontWeight={600}>
          {t("footer.getInTouch")}
        </Typography>

        <Stack direction="row" spacing={2}>
          <LocationOnOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">{t("footer.address")}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <PhoneOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">{t("footer.phone")}</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <MailOutlineOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">{t("footer.email")}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ContactSection;
