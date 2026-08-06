import { Box, Button, Container, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "./style";
import { fontWeights } from "../../styles/fontWeights";

const ContactCTA = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919211924515?text=Hello, I would like a free medical consultation.",
      "_blank",
    );
  };

  return (
    <Box sx={styles.section}>
      <Container>
        <Stack sx={styles.container}>
          <Box sx={styles.content}>
            <Typography variant="h4" fontWeight={fontWeights.semiBold}>
              {t("contactCTA.title")}
            </Typography>

            <Typography variant="body1">
              {t("contactCTA.description")}
            </Typography>
          </Box>

          <Stack sx={styles.buttonStack}>
            <Button
              size="medium"
              variant="contained"
              startIcon={<LocalHospitalIcon />}
              onClick={() => navigate("/contactUs")}
              sx={styles.consultationButton}
            >
              {t("contactCTA.consultationButton")}
            </Button>

            <Button
              size="large"
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={styles.whatsappButton}
            >
              {t("contactCTA.whatsappButton")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactCTA;
