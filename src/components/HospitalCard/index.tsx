// // import React from "react";
// // import "./style";
// // import { FiMapPin } from "react-icons/fi";

// // export interface HospitalCardProps {
// //   image: string;
// //   name: string;
// //   location: string;
// //   description: string;
// //   specializations: string[];
// // }

// // const HospitalCard: React.FC<HospitalCardProps> = ({
// //   image,
// //   name,
// //   location,
// //   description,
// //   specializations,
// // }) => {
// //   const visible = specializations.slice(0, 3);
// //   const remaining = specializations.length - visible.length;

// //   return (
// //     <div className="hospital-card">
// //       <div className="hospital-image">
// //         <img src={image} alt={name} />
// //       </div>

// //       <div className="hospital-content">
// //         <h2>{name}</h2>

// //         <div className="hospital-location">
// //           <FiMapPin size={16} />
// //           <span>{location}</span>
// //         </div>

// //         <p>{description}</p>

// //         <div className="hospital-tags">
// //           {visible.map((item) => (
// //             <span key={item} className="tag">
// //               {item}
// //             </span>
// //           ))}

// //           {remaining > 0 && <span className="tag count">+{remaining}</span>}
// //         </div>
// //       </div>

// //       {/* <div className="hospital-arrow">❯</div> */}
// //     </div>
// //   );
// // };

// // export default HospitalCard;
// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { FiMapPin } from "react-icons/fi";
// import { styles } from "./style";
// import { useNavigate } from "react-router-dom";
// export interface HospitalCardProps {
//     id: number;

//   image: string;
//   name: string;
//   location: string;
//   description: string;
//   specializations: string[];
// }

// const HospitalCard: React.FC<HospitalCardProps> = ({
//     id,

//   image,
//   name,
//   location,
//   description,
//   specializations,
// }) => {
//   const navigate = useNavigate();
//   const visible = specializations.slice(0, 3);
//   const remaining = specializations.length - visible.length;

//   return (
//     <Box sx={styles.hospitalCard}  sx={{
//     ...styles.hospitalCard,
//     cursor: "pointer",
//   }}
//   onClick={() => {
//     navigate(`/hospitals/${id}`);
//   }}>
//       <Box sx={styles.hospitalImage}>
//         <Box
//           component="img"
//           src={image}
//           alt={name}
//           sx={{
//             width: {
//               xs: "100%",
//               md: 300,
//             },
//             height: {
//               xs: 220,
//               md: "100%",
//             },
//             objectFit: "cover",
//             display: "block",
//             flexShrink: 0,
//           }}
//         />
//       </Box>

//       <Box sx={styles.hospitalContent}>
//         <Typography component="h2" sx={styles.hospitalTitle}>
//           {name}
//         </Typography>

//         <Box sx={styles.hospitalLocation}>
//           <FiMapPin size={16} />
//           <Typography variant="body2">{location}</Typography>
//         </Box>

//         <Typography component="p" sx={styles.hospitalDescription}>
//           {description}
//         </Typography>

//         <Box sx={styles.hospitalTags}>
//           {visible.map((item) => (
//             <Box key={item} component="span" sx={styles.tag}>
//               {item}
//             </Box>
//           ))}

//           {remaining > 0 && (
//             <Box
//               component="span"
//               sx={{
//                 ...styles.tag,
//                 ...styles.count,
//               }}
//             >
//               +{remaining}
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* <Box sx={styles.hospitalArrow}>
//         <ChevronRightIcon />
//       </Box> */}
//     </Box>
//   );
// };

// export default HospitalCard;
import React from "react";
import { Box, Typography } from "@mui/material";
import { FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { styles } from "./style";

export interface HospitalCardProps {
  id: number;
  image: string;
  name: string;
  location: string;
  description: string;
  specializations: string[];
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  id,
  image,
  name,
  location,
  description,
  specializations,
}) => {
  const navigate = useNavigate();

  const visible = specializations.slice(0, 3);
  const remaining = specializations.length - visible.length;

  return (
    <Box
      sx={{
        ...styles.hospitalCard,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/hospitals/${id}`)}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: {
            xs: "100%",
            md: 300,
          },
          height: {
            xs: 220,
            md: "100%",
          },
          objectFit: "cover",
          display: "block",
          flexShrink: 0,
        }}
      />

      <Box sx={styles.hospitalContent}>
        <Typography component="h2" sx={styles.hospitalTitle}>
          {name}
        </Typography>

        <Box sx={styles.hospitalLocation}>
          <FiMapPin size={16} />
          <Typography variant="body2">{location}</Typography>
        </Box>

        <Typography
          component="p"
          sx={{
            fontSize: "0.875rem", // 14px
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Box sx={styles.hospitalTags}>
          {visible.map((item) => (
            <Box key={item} component="span" sx={styles.tag}>
              {item}
            </Box>
          ))}

          {remaining > 0 && (
            <Box
              component="span"
              sx={{
                ...styles.tag,
                ...styles.count,
              }}
            >
              +{remaining}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HospitalCard;
