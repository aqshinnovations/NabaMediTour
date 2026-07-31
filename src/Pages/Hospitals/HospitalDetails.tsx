import { useParams, Link } from "react-router-dom";
import { FiMapPin, FiCheckCircle } from "react-icons/fi";
import { Box, Chip, Typography } from "@mui/material";

import { hospitals } from "../../data/hospitals";

const HospitalDetails = () => {
  const { id } = useParams();

  const hospital = hospitals.find((item) => item.id === Number(id));

  if (!hospital) return <>Hospital not found</>;

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          height: 340,
          backgroundImage: `linear-gradient(
  rgba(0,0,0,.55),
  rgba(0,0,0,.55)
), url(${hospital.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            margin: "auto",
            color: "#fff",
            px: 3,
          }}
        >
          <Typography
            component={Link}
            to="/hospitals"
            sx={{
              color: "#58e3d3",
              textDecoration: "none",
            }}
          >
            ← All hospitals
          </Typography>

          <Typography variant="h2" fontWeight={700} mt={2}>
            {hospital.name_en}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1,
            }}
          >
            <FiMapPin />
            India
          </Box>
        </Box>
      </Box>

      {/* Content */}

      <Box
        sx={{
          maxWidth: 1200,
          margin: "60px auto",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            lineHeight: 1.8,
            color: "#334155",
          }}
        >
          {hospital.description_en}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 8,
            mt: 6,
          }}
        >
          {/* Facilities */}

          <Box>
            <Typography fontWeight={700} fontSize={28} mb={3}>
              <FiCheckCircle
                style={{
                  color: "#0ea5a3",
                  marginRight: 10,
                }}
              />
              Facilities
            </Typography>

            {hospital.facilities.length ? (
              hospital.facilities.map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    mb: 2,
                    fontSize: 18,
                  }}
                >
                  • {item.name_en}
                </Typography>
              ))
            ) : (
              <>
                <Typography>• ICU & NICU</Typography>
                <Typography>• Emergency</Typography>
                <Typography>• Advanced Diagnostics</Typography>
                <Typography>• Robotic Surgery</Typography>
                <Typography>• Organ Transplant Unit</Typography>
              </>
            )}
          </Box>

          {/* Specialities */}

          <Box>
            <Typography fontWeight={700} fontSize={28} mb={3}>
              Specialties
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {(hospital.facilities.length
                ? hospital.facilities.map((x) => x.name_en)
                : [
                    "Cardiology",
                    "Oncology",
                    "Neurology",
                    "Orthopedics",
                    "Transplant Surgery",
                  ]
              ).map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    bgcolor: "#E8FAF7",
                    color: "#00897B",
                    borderRadius: "20px",
                    fontSize: 16,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HospitalDetails;
