import React from "react";
import { Card, CardMedia, Typography, Box, Link } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styles } from "./style";
import { fontWeights } from "../../styles/fontWeights";

export interface DoctorCardProps {
  image: string;
  name: string;
  specialization: string;
  about: string;
  experience: number;
  onViewProfile?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialization,
  experience,
  about,
  onViewProfile,
}) => {
  return (
    <Card sx={styles.card} elevation={0}>
      <CardMedia component="img" image={image} alt={name} sx={styles.image} />

      <Box sx={styles.content}>
        <Typography variant="h6" fontWeight={fontWeights.bold}>
          {name}
        </Typography>

        <Typography sx={styles.specialization}>{specialization}</Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {about}
        </Typography>
        <Box sx={styles.experienceContainer}>
          <AccessTimeOutlinedIcon sx={styles.icon} />
          <Typography sx={styles.experience}>
            {experience} years experience
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
