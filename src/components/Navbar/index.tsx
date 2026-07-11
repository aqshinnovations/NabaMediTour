import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";
import { shadows } from "../../styles/shadows";
import IMCLogo from "../../assets/images/logo.png";
import IMCTypography from "../IMCTypography";
import { fontWeights } from "../../styles/fontWeights";
import IMCButton from "../IMCButton";
import { fontSizes } from "../../styles/fontSizes";
import IMCSearch from "../IMCSearch";
import Grid from "@mui/material/Grid";
import { spacing } from "../../styles/spacing";

const Navbar: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: spacing.sm,
          backgroundColor: colors.teal,
          boxShadow: shadows.heavy,
        }}
      >
        {/* Logo */}

        <Grid container justifyContent="space-between" spacing={1}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              // background: colors.black,
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={IMCLogo}
                alt="Nabameditour Logo"
                sx={{ height: 40, width: "auto" }}
              />
              <IMCTypography
                variant="subtitle"
                weight={fontWeights.semiBold}
                color={colors.white}
              >
                Nabameditour
              </IMCTypography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 8, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              // background: colors.black,
            }}
          >
            <IMCSearch
              items={[]}
              placeholder="Search doctors..."
              onSelect={(val) => console.log("Typed:", val)}
            />
          </Grid>
          <Grid
            size={{ xs: 4, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              // background: colors.black,
            }}
          >
            <IMCButton
              fontSize={fontSizes.base}
              bgColor={colors.danger}
              textColor={colors.white}
              fontWeight={fontWeights.semiBold}
              text="Contact us"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
