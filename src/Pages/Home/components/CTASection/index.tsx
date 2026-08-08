import { Box, Button, Container, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <Box sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </Box>

        <Typography sx={styles.title}>{t("section.ctaTitle")}</Typography>

        <Typography sx={styles.subtitle}>
          {t("section.ctaDescription")}
        </Typography>

        <Button
          variant="contained"
          sx={styles.button}
          onClick={() => navigate("/contactUs")}
        >
          {t("section.getFreeConsultation")}
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
