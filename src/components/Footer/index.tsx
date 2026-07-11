import IMCBox from "../IMCBox";
import { Grid } from "@mui/material";
import ContactSection from "./components/ContactSection";
import ProceduresSection from "./components/ProceduresSection";
import HospitalsSection from "./components/HospitalsSection";
import DoctorsSection from "./components/DoctorsSection";
import Policy from "./components/policy";

import { spacing } from "../../styles/spacing";
import { colors } from "../../styles/colors";
const Footer = () => {
  return (
    <>
      <IMCBox
        margin={spacing.none}
        backgroundColor={colors.teal}
        padding={spacing.lg}
      >
        <Grid container spacing={4} sx={{ pb: 6 }}>
          <ContactSection />
          <ProceduresSection />
          <HospitalsSection />
          <DoctorsSection />
        </Grid>
      </IMCBox>
      <IMCBox margin={spacing.none} backgroundColor={colors.danger}>
        <Policy />
      </IMCBox>
    </>
  );
};

export default Footer;
