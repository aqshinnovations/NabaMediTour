import { useNavigate } from "react-router-dom";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styles } from "./style";
import { colors } from "../../styles/colors";
import { fontWeights } from "../../styles/fontWeights";

export interface BlogCardProps {
  id: number;

  image: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  onClick?: () => void;
}
const BlogCard = ({
  id,
  image,
  title,
  content,
  author,
  created_at,
}: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={styles.card} onClick={() => navigate(`/blogs/${id}`)}>
      <CardMedia component="img" image={image} alt={title} sx={styles.image} />

      <Box sx={styles.content}>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          mb={1}
          color="text.secondary"
        >
          <Box display="flex" alignItems="center" gap={0.5}>
            <PersonOutlineIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2">{author}</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="body2">{created_at}</Typography>
          </Box>
        </Box>

        <Typography fontWeight={fontWeights.semiBold} fontSize={24} mb={1}>
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {content}
        </Typography>

        <Box
          mt={2}
          display="flex"
          alignItems="center"
          gap={1}
          color={colors.primary}
        >
          <Typography fontWeight={600}>Read More</Typography>
          <ArrowForwardIcon fontSize="small" />
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
// import { Card, CardMedia, Typography, Box } from "@mui/material";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import { styles } from "./style";
// import { colors } from "../../styles/colors";
// import { fontWeights } from "../../styles/fontWeights";

// export interface BlogCardProps {
//   id: number;

//   image: string;
//   title: string;
//   content: string;
//   author: string;
//   created_at: string;
//   onClick?: () => void;
// }

// const BlogCard = ({
//   image,
//   title,
//   content,
//   author,
//   created_at,
//   onClick,
// }: BlogCardProps) => {
//   return (
//     <Card sx={styles.card} onClick={onClick}>
//       <CardMedia component="img" image={image} alt={title} sx={styles.image} />

//       <Box sx={styles.content}>
//         <Box
//           display="flex"
//           gap={2}
//           alignItems="center"
//           mb={1}
//           color="text.secondary"
//         >
//           <Box display="flex" alignItems="center" gap={0.5}>
//             <PersonOutlineIcon sx={{ fontSize: 16 }} />
//             <Typography variant="body2">{author}</Typography>
//           </Box>

//           <Box display="flex" alignItems="center" gap={0.5}>
//             <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} />
//             <Typography variant="body2">{created_at}</Typography>
//           </Box>
//         </Box>

//         <Typography fontWeight={fontWeights.semiBold} fontSize={24} mb={1}>
//           {title}
//         </Typography>

//         <Typography
//           color="text.secondary"
//           sx={{
//             display: "-webkit-box",
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//           }}
//         >
//           {content}
//         </Typography>

//         <Box
//           mt={2}
//           display="flex"
//           alignItems="center"
//           gap={1}
//           color={colors.primary}
//         >
//           <Typography fontWeight={600}>Read More</Typography>
//           <ArrowForwardIcon fontSize="small" />
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default BlogCard;
