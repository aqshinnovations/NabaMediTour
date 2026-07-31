// import React from "react";
// import { Card, CardMedia, Typography, Box, Link } from "@mui/material";
// import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { styles } from "./style";
// import { fontWeights } from "../../styles/fontWeights";

// export interface DoctorCardProps {
//   id: number;

//   image: string;

//   name_en: string;
//   name_ar: string;

//   about_en: string;
//   about_ar: string;

//   experience_en: string;
//   experience_ar: string;

//   category: {
//     id: number;
//     name_en: string;
//     name_ar: string;
//   };

//   qualifications: {
//     id: number;
//     name_en: string;
//     name_ar: string;
//   }[];

//   specialists: {
//     id: number;
//     name_en: string;
//     name_ar: string;
//   }[];

//   onViewProfile?: () => void;
// }

// const DoctorCard: React.FC<DoctorCardProps> = ({
//   image,
//   name,
//   specialization,
//   experience,
//   about,
//   onViewProfile,
// }) => {
//   return (
//     <Card sx={styles.card} elevation={0}>
//       <CardMedia component="img" image={image} alt={name} sx={styles.image} />

//       <Box sx={styles.content}>
//         <Typography variant="h6" fontWeight={fontWeights.bold}>
// {name_en}        </Typography>

//         <Typography sx={styles.specialization}>{category.name_en}</Typography>
//         <Typography
//           sx={{
//             display: "-webkit-box",
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}
//         >
// {about_en}        </Typography>
//         <Box sx={styles.experienceContainer}>
//           <AccessTimeOutlinedIcon sx={styles.icon} />
//           <Typography sx={styles.experience}>
//             {experience_en} years experience
//           </Typography>
//         </Box>

//         <Link
//           component="button"
//           underline="none"
//           onClick={onViewProfile}
//           sx={styles.link}
//         >
//           View profile
//           <ArrowForwardIcon fontSize="small" />
//         </Link>
//       </Box>
//     </Card>
//   );
// };

// export default DoctorCard;
import React from "react";
import { Card, CardMedia, Typography, Box, Link } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styles } from "./style";
import { fontWeights } from "../../styles/fontWeights";

export interface DoctorCardProps {
  id: number;
  image: string;

  name_en: string;
  name_ar: string;

  about_en: string;
  about_ar: string;

  experience_en: string;
  experience_ar: string;

  category: {
    id: number;
    name_en: string;
    name_ar: string;
  };

  qualifications: {
    id: number;
    name_en: string;
    name_ar: string;
  }[];

  specialists: {
    id: number;
    name_en: string;
    name_ar: string;
  }[];

  onViewProfile?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name_en,
  about_en,
  experience_en,
  category,
  onViewProfile,
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={name_en}
        sx={styles.image}
      />

      <Box sx={styles.content}>
        <Typography variant="h6" fontWeight={fontWeights.bold}>
          {name_en}
        </Typography>

        <Typography sx={styles.specialization}>{category.name_en}</Typography>

        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {about_en}
        </Typography>

        <Box sx={styles.experienceContainer}>
          <AccessTimeOutlinedIcon sx={styles.icon} />

          <Typography sx={styles.experience}>
            {experience_en} years experience
          </Typography>
        </Box>

        <Link
          component="button"
          underline="none"
          onClick={onViewProfile}
          sx={styles.link}
        >
          View profile
          <ArrowForwardIcon fontSize="small" />
        </Link>
      </Box>
    </Card>
  );
};

export default DoctorCard;
