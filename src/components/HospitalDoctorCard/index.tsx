import { Box, Typography } from "@mui/material";
import { colors } from "../../styles/colors";

interface HospitalDoctorCardProps {
  image: string;
  name: string;
  specialization: string;
}

const HospitalDoctorCard = ({
  image,
  name,
  specialization,
}: HospitalDoctorCardProps) => {
  return (
    <Box
      sx={{
        maxWidth: 200,
        // border: `1px solid ${colors.msGreen}`,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: colors.white,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
        }}
      />

      <Box sx={{ p: 2 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            mb: 0.5,
          }}
        >
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {specialization}
        </Typography>
      </Box>
    </Box>
  );
};

export default HospitalDoctorCard;
