import { useState } from "react";
import { Box, Chip, Grid } from "@mui/material";
import IMCBox from "../../components/IMCBox";
import IMCTypography from "../../components/IMCTypography";
import DoctorCard from "../../components/DoctorCard";
import { doctors } from "../../data/doctors";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useNavigate } from "react-router-dom";
const specializations = [
  "All",
  "Cardiologist",
  "Oncologist",
  "Neurosurgeon",
  "Orthopedic Surgeon",
  "Plastic Surgeon",
  "Dental Surgeon",
];

const Doctors = () => {
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();
  const filteredDoctors =
    selected === "All"
      ? doctors
      : doctors.filter((doctor) =>
          doctor.specialists.some(
            (specialist) => specialist.name_en === selected,
          ),
        );
  return (
    <>
      {/* Hero */}
      <IMCBox
        style={{
          background: "#108a8d",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <IMCTypography
          variant="h2"
          size={fontSizes.xxxl}
          weight={fontWeights.bold}
          color={colors.white}
        >
          Our Doctors
        </IMCTypography>

        <IMCTypography
          color={colors.white}
          style={{
            marginTop: 16,
            opacity: 0.95,
            maxWidth: 700,
            marginInline: "auto",
          }}
        >
          Highly qualified and experienced specialists dedicated to providing
          exceptional medical care.
        </IMCTypography>
      </IMCBox>

      {/* Filter */}
      <Box
        sx={{
          py: 5,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          background: "#fff",
        }}
      >
        {specializations.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setSelected(item)}
            color={selected === item ? "primary" : "default"}
            sx={{
              borderRadius: "30px",
              px: 1,
              py: 2.8,
              fontSize: "15px",
            }}
          />
        ))}
      </Box>

      {/* Doctors */}
      <Box
        sx={{
          background: "#f7f9fc",
          py: 8,
        }}
      >
        <Grid container spacing={4} maxWidth="1200px" mx="auto">
          {filteredDoctors.map((doctor) => (
            <Grid
              key={doctor.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <DoctorCard
                {...doctor}
                onViewProfile={() => navigate(`/Doctors/${doctor.id}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Doctors;
