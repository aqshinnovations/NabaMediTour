import React from "react";
import { Card, Typography, Box, Link, CardMedia } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { styles } from "./style";
import { useTranslation } from "react-i18next";

export interface DoctorCardProps {
  id: number;
  image: string;

  name: string;
  about: string;
  experience: string;

  category: string;

  onViewProfile?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  about,
  experience,
  category,
  onViewProfile,
}) => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        ...styles.card,
        cursor: "pointer",
      }}
      onClick={onViewProfile}
    >
      <CardMedia component="img" image={image} alt={name} sx={styles.image} />
      <Box sx={styles.content}>
        <Typography sx={styles.name}>{name}</Typography>

        <Typography sx={styles.specialization}>{category}</Typography>

        <Box sx={styles.experienceContainer}>
          <AccessTimeOutlinedIcon sx={styles.icon} />

          <Typography sx={styles.experience}>
            {experience} {t("doctorCard.yearsExperience")}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "0.875rem",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {about}
        </Typography>

        <Link
          component="button"
          underline="none"
          onClick={(e) => {
            e.stopPropagation();
            onViewProfile?.();
          }}
          sx={styles.link}
        >
          {t("doctorCard.viewProfile")}

          {/* {isArabic ? (
            <ArrowBackIcon fontSize="small" />
          ) : (
            <ArrowForwardIcon fontSize="small" />
          )} */}
        </Link>
      </Box>
    </Card>
  );
};

export default DoctorCard;
