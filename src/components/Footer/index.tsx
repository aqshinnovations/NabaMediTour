import { Grid, Divider } from "@mui/material";
import IMCBox from "../IMCBox";

import CompanyInfoSection from "./components/CompanyInfoSection";
import TreatmentsSection from "./components/TreatmentsSection";
import CompanySection from "./components/CompanySection";
import ContactSection from "./components/ContactSection";
import FooterBottom from "./components/FooterBottom";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <IMCBox
      backgroundColor={colors.black}
      margin={spacing.none}
      padding={spacing.md}
    >
      <Grid
        container
        spacing={5}
        justifyContent="space-between"
        sx={{
          px: { xs: 3, sm: 6, md: 12, lg: 16 }, // only inner padding
        }}
      >
        <CompanyInfoSection />
        <TreatmentsSection />
        <CompanySection />
        <ContactSection />
      </Grid>

      <Divider
        sx={{
          my: 6,
          borderColor: "rgba(255,255,255,.08)",
          mx: { xs: 3, sm: 6, md: 12, lg: 16 },
        }}
      />

      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 12, lg: 16 },
        }}
      >
        <FooterBottom />
      </Box>
    </IMCBox>
  );
};

export default Footer;
