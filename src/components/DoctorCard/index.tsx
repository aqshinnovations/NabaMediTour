import React from "react";
import { Card, Typography, Box, Button, CardMedia } from "@mui/material";
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

        <Typography
          sx={[
            styles.specialization,
            {
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            },
          ]}
        >
          {category}
        </Typography>

        <Box sx={styles.experienceContainer}>
          {/* <AccessTimeOutlinedIcon sx={styles.icon} /> */}

          <Typography sx={styles.experience}>
            {experience} {t("doctorCard.yearsExperience")}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "0.5rem",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {about}
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}
        >
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              onViewProfile?.();
            }}
            sx={{
              borderRadius: "6px",
              fontSize: "0.75rem",
              padding: "4px 12px",
              minWidth: "auto",
              textTransform: "none",
              marginTop: "5px",
            }}
          >
            {t("doctorCard.viewProfile")}{" "}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default DoctorCard;
