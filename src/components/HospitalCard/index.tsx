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
  government_scheme_logos?: { id: number; image: string }[];
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  id,
  image,
  name,
  location,
  description,
  specializations,
  government_scheme_logos,
}) => {
  const navigate = useNavigate();

  const visible = specializations.slice(0, 2);
  const remaining = specializations.length - visible.length;

  const visibleGovernmentLogos = government_scheme_logos?.slice(0, 5) || [];

  return (
    <Box sx={styles.hospitalCard} onClick={() => navigate(`/hospitals/${id}`)}>
      {/* Hospital Image */}
      <Box component="img" src={image} alt={name} sx={styles.hospitalImage} />

      {/* Hospital Details */}
      <Box sx={styles.hospitalContent}>
        <Typography component="h2" sx={styles.hospitalTitle}>
          {name}
        </Typography>

        <Box sx={styles.hospitalLocation}>
          <FiMapPin size={16} />
          <Typography variant="body2">{location}</Typography>
        </Box>

        <Typography component="p" sx={styles.hospitalDescription}>
          {description}
        </Typography>

        {/* Specializations */}
        {visible.length > 0 && (
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
        )}

        {/* Government Scheme Logos */}
        {visibleGovernmentLogos.length > 0 && (
          <Box sx={styles.govtLogos}>
            {visibleGovernmentLogos.map((logo) => (
              <Box
                key={logo.id}
                component="img"
                src={logo.image}
                alt="Government scheme"
                sx={styles.govtLogo}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HospitalCard;
