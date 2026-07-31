import { Grid, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const ContactSection = () => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Stack spacing={3}>
        <Typography fontWeight={700}>Get in Touch</Typography>

        <Stack direction="row" spacing={2}>
          <LocationOnOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">New Delhi ,India</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <PhoneOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">+91 98915 67245</Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          <MailOutlineOutlinedIcon sx={{ color: "#00E5FF" }} />
          <Typography color="#A0AEC0">nabameditour@gmail.com</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ContactSection;
