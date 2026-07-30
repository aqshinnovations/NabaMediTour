// import { useEffect, useState } from "react";
// import { Grid } from "@mui/material";

// import IMCBox from "../../../../components/IMCBox";
// import IMCTypography from "../../../../components/IMCTypography";

// import { spacing } from "../../../../styles/spacing";
// import { fontSizes } from "../../../../styles/fontSizes";
// import { fontWeights } from "../../../../styles/fontWeights";
// import { colors } from "../../../../styles/colors";
// import DoctorCard from "../../../../components/DoctorCard";
// import { getDoctors } from "./doctorApi";
// import type { Doctor } from "./doctorApi";

// const DoctorsSection = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Change this based on selected category
//   const categoryId = 2;

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const data = await getDoctors(categoryId);
//       console.log("Doctors:", data);

//       setDoctors(data);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <IMCBox
//         margin={spacing.none}
//         style={{
//           width: "100%",
//           gap: 10,
//           padding: "30px",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <IMCTypography
//           variant="h1"
//           size={fontSizes.xxl}
//           weight={fontWeights.ultraBold}
//           color={colors.msBlue}
//           style={{
//             lineHeight: 1,
//             textAlign: "center",
//             marginBottom: "32px",
//             width: "100%",
//           }}
//         >
//           Doctors
//         </IMCTypography>

//         {loading ? (
//           <IMCTypography>Loading...</IMCTypography>
//         ) : (
//           <Grid container spacing={4}>
//             {doctors.map((doctor: any) => (
//               <Grid size={{ xs: 12, sm: 6, md: 3 }} key={doctor.id}>
//                 <DoctorCard
//                   image={doctor.image}
//                   name={doctor.name_en}
//                   specialization={doctor.category?.name ?? ""}
//                   experience={Number(doctor.experience_en)}
//                   onViewProfile={() => console.log(doctor.id)}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </IMCBox>
//     </>
//   );
// };

// export default DoctorsSection;
import { Grid } from "@mui/material";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import DoctorCard from "../../../../components/DoctorCard";
import { doctors } from "../../../../data/doctors";
import { spacing } from "../../../../styles/spacing";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";

const DoctorsSection = () => {
  return (
    <IMCBox
      margin={spacing.none}
      style={{
        width: "100%",
        gap: 10,
        padding: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IMCTypography
        variant="h1"
        size={fontSizes.xxl}
        weight={fontWeights.ultraBold}
        color={colors.msBlue}
        style={{
          lineHeight: 1,
          textAlign: "center",
          marginBottom: "32px",
          width: "100%",
        }}
      >
        Doctors
      </IMCTypography>

      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={doctor.id}>
            <DoctorCard
              image={doctor.image}
              name={doctor.name_en}
              about={doctor.about_en}
              specialization={doctor.category.name_en}
              experience={Number(doctor.experience_en)}
              onViewProfile={() => console.log(doctor.id)}
            />
          </Grid>
        ))}
      </Grid>
    </IMCBox>
  );
};

export default DoctorsSection;
