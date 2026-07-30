import { Box, Button, Container, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styles } from "./styles";

const CTASection = () => {
  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Box sx={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
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
          endIcon={<ArrowForwardIcon />}
          sx={styles.button}
        >
          Get Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
