import { Box, Container, Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import { stats } from "./const";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.section}>
      <Container sx={styles.container}>
        <Grid container spacing={4}>
          {stats.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box sx={styles.item}>
                <Typography sx={styles.number}>{item.number}</Typography>

                <Typography sx={styles.title}> {t(item.title)}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
