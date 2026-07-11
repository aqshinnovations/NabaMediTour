import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import IMCBox from "../../IMCBox";
import { Icons } from "../../../styles/icons";
import { useTranslation } from "react-i18next";

// Each doctor type is now linked to its route

const DoctorsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const doctors = [
    {
      label: t("footer_doctors.liverTransplant"),
      // path: "/Doctors/liverTransplant",
    },
    {
      label: t("footer_doctors.kidneyTransplant"),
      // path: "/Doctors/kidneyTransplant",
    },
    {
      label: t("footer_doctors.heartTransplant"),
      // path: "/Doctors/heartTransplant",
    },
    {
      label: t("footer_doctors.ivfInfertility"),
      // path: "/Doctors/ivfInfertility",
    },
    {
      label: t("footer_doctors.pediatricSurgeons"),
      // path: "/Doctors/pediatricSurgeons",
    },
    {
      label: t("footer_doctors.hematologist"),
      // path: "/Doctors/hematologist"
    },
    {
      label: t("footer_doctors.kneeHipElbowShoulder"),
      // path: "/Doctors/kneeHipElbowShoulder",
    },
  ];

  return (
    <Grid size={{ xs: 12, md: 3, sm: 6 }}>
      <IMCTypography
        variant="subtitle"
        size={fontSizes.xl}
        weight={fontWeights.semiBold}
        color={colors.white}
        style={{ marginBottom: spacing.sm }}
      >
        {t("footer.top_doctors")}
      </IMCTypography>

      <Box />

      {doctors.map((item, index) => (
        <IMCBox
          key={index}
          margin="0"
          padding="0"
          backgroundColor={colors.transparent}
          onClick={() => {
            navigate(item.label);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            ...styles.iconTextRow("center", spacing.none, spacing.xs),
            cursor: "pointer",
            transition: "transform 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(0)")
          }
        >
          <Icons.KeyboardDoubleArrowRightIcon
            sx={{ color: colors.white, fontSize: fontSizes.xl }}
          />
          <IMCTypography
            variant="body"
            color={colors.white}
            size={fontSizes.md}
            style={{ margin: 0 }}
          >
            {item.label}
          </IMCTypography>
        </IMCBox>
      ))}
    </Grid>
  );
};

const styles = {
  iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
    display: "flex",
    alignItems: align,
    gap: spacing.sm,
    marginTop,
    marginBottom,
  }),
};

export default DoctorsSection;

// import { Grid, Box } from "@mui/material";
// import IMCTypography from "../../IMCTypography";
// import { fontSizes } from "../../../styles/fontSizes";
// import { fontWeights } from "../../../styles/fontWeights";
// import { colors } from "../../../styles/colors";
// import { spacing } from "../../../styles/spacing";
// import IMCBox from "../../IMCBox";
// import { Icons } from "../../../styles/icons";
// const doctors = [
//   "Top Organ Transplant Surgeons",
//   "Top Cardiologists",
//   "Top Oncologists",
//   "Top Orthopedic Surgeons",
//   "Top IVF Infertility Doctors",
//   "Top Pediatric Surgeons",
//   "Top Spine Surgeons",
//   "Top Cardiac Surgeons",
//   "Top Surgical Oncologists",
//   "Top Hematologist",
// ];

// const DoctorsSection = () => (
//   <Grid size={{ xs: 12, md: 3, sm: 6 }}>
//     <IMCTypography
//       variant="subtitle"
//       size={fontSizes.xl}
//       weight={fontWeights.semiBold}
//       color={colors.white}
//       style={{ marginBottom: spacing.sm }}
//     >
//       Top Doctors
//     </IMCTypography>
//     <Box mb={4} height="4px" width="100px" bgcolor={colors.white} />

//     {doctors.map((item, index) => (
//       <IMCBox
//         key={index}
//         margin="0"
//         padding="0"
//         backgroundColor={colors.transparent}
//         style={styles.iconTextRow("center", spacing.none, spacing.xs)}
//       >
//         <Icons.KeyboardDoubleArrowRightIcon
//           sx={{ color: colors.white, fontSize: fontSizes.xl }}
//         />
//         <IMCTypography
//           variant="body"
//           color={colors.white}
//           size={fontSizes.md}
//           style={{ margin: 0 }}
//         >
//           {item}
//         </IMCTypography>
//       </IMCBox>
//     ))}
//   </Grid>
// );

// const styles = {
//   iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
//     display: "flex",
//     alignItems: align,
//     gap: spacing.sm,
//     marginTop,
//     marginBottom,
//   }),
// };
// export default DoctorsSection;
