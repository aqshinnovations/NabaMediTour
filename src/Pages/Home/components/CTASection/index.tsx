import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </Box>

        <Typography sx={styles.title}>
          Start Your Healing Journey Today
        </Typography>

        <Typography sx={styles.subtitle}>
          Get a free consultation with our medical experts. No fees, no
          obligations.
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon sx={styles.arrow} />}
          sx={styles.button}
          onClick={() => navigate("/contactUs")}
        >
          Get Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
