import { Grid, Box, Link } from "@mui/material";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import { Icons } from "../../../styles/icons";
import IMCLogo from "../../../assets/images/logo.png";
import IMCBox from "../../IMCBox";
import { EMAIL1, Mobile } from "../../../constants/contact";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const contact = {
    address: t("contact.address"),
    email: EMAIL1,
    phone: Mobile,
    socials: [
      {
        name: Icons.FacebookIcon,
        url: "https://www.facebook.com/",
      },
      { name: Icons.InstagramIcon, url: "https://instagram.com" },
      { name: Icons.LinkedInIcon, url: "https://linkedin.com" },
      { name: Icons.YouTubeIcon, url: "https://youtube.com" },
    ],
  };

  return (
    <Grid size={{ xs: 12, md: 3, sm: 6 }}>
      <IMCTypography
        variant="subtitle"
        size={fontSizes.xl}
        weight={fontWeights.semiBold}
        color={colors.white}
        style={{ marginBottom: spacing.sm }}
      >
        {t("footer.contact_us")}
      </IMCTypography>

      <Box />

      <IMCBox margin="0" padding="0" style={styles.logoRow}>
        <Box
          component="img"
          src={IMCLogo}
          alt="InDocsCare Logo"
          sx={{ height: fontSizes.xl, width: "auto", cursor: "pointer" }}
        />
        <IMCTypography
          variant="h3"
          weight={fontWeights.semiBold}
          color={colors.white}
          size={fontSizes.md}
        >
          Nabameditour
        </IMCTypography>
      </IMCBox>

      <IMCBox
        margin="0"
        padding="0"
        backgroundColor={colors.transparent}
        style={styles.iconTextRow()}
      >
        <Icons.CallIcon sx={{ color: colors.white, fontSize: fontSizes.xl }} />
        <IMCTypography
          variant="body"
          color={colors.white}
          size={fontSizes.md}
          style={{ margin: 0 }}
          weight={fontWeights.semiBold}
        >
          {contact.phone}
        </IMCTypography>
      </IMCBox>

      <IMCBox
        margin="0"
        padding="0"
        backgroundColor={colors.transparent}
        style={styles.iconTextRow("center", spacing.sm, spacing.md)}
      >
        <Icons.EmailIcon sx={{ color: colors.white, fontSize: fontSizes.xl }} />
        <IMCTypography
          variant="body"
          color={colors.white}
          size={fontSizes.md}
          style={{ margin: 0 }}
          weight={fontWeights.semiBold}
        >
          {contact.email}
        </IMCTypography>
      </IMCBox>
      <IMCBox
        margin="0"
        padding="0"
        backgroundColor={colors.transparent}
        style={styles.iconTextRow("flex-start")}
      >
        <Icons.BusinessIcon
          sx={{
            color: colors.white,
            fontSize: fontSizes.xl,
          }}
        />
        <IMCTypography
          variant="body"
          color={colors.white}
          size={fontSizes.md}
          style={{ margin: 5 }}
          weight={fontWeights.semiBold}
        >
          {contact.address}
        </IMCTypography>
      </IMCBox>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
          mt: 2,
        }}
      >
        {contact.socials.map(({ name: Icon, url }, index) => (
          <Link
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.socialLink}
          >
            <Icon sx={{ fontSize: fontSizes.xxl }} />
          </Link>
        ))}
      </Box>
    </Grid>
  );
};

const styles = {
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    textDecoration: "none",
  },
  iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
    display: "flex",
    alignItems: align,
    gap: spacing.md,
    marginTop,
    marginBottom,
  }),
  socialLink: {
    display: "flex",
    alignItems: "center",
    color: colors.white,
    "&:hover": {
      color: colors.white,
    },
  },
  divider: {
    marginBottom: spacing.md,
  },
};
export default ContactSection;
