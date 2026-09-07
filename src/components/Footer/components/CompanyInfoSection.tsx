import { Grid, Typography, Stack, IconButton, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteImg from "../../../assets/images/logo.png";

import { useTranslation } from "react-i18next";

const CompanyInfoSection = () => {
  const { t } = useTranslation();

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      {" "}
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            component="img"
            src={FavoriteImg}
            alt="Favorite"
            sx={{
              width: "300px",
              height: "70px",
              // objectFit: "contain",
            }}
          />
          {/* </Stack> */}

          {/* <Typography fontWeight={700} fontSize={30} color={colors.white}>
            {t("footer.brand")}
          </Typography> */}
        </Stack>

        <Typography
          sx={{
            color: "#A0AEC0",
            lineHeight: 1.8,
            maxWidth: 330,
          }}
        >
          {t("footer.description")}
        </Typography>

        <Stack direction="row" spacing={2}>
          {[FacebookIcon, XIcon, LinkedInIcon, InstagramIcon].map(
            (Icon, index) => (
              <IconButton
                key={index}
                sx={{
                  bgcolor: "#1F2937",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#15B8D6",
                  },
                }}
              >
                <Icon />
              </IconButton>
            ),
          )}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CompanyInfoSection;
