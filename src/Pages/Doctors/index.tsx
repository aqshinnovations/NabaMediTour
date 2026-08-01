import { useState } from "react";
import { Box, Chip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DoctorCard from "../../components/DoctorCard";
import PageHero from "../../components/PageHero";

import { doctors } from "../../data/doctors";
import { specializations } from "../../data/specializations";
import { styles } from "./styles";

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
      <PageHero
        title="Our Doctors"
        description="Highly qualified and experienced specialists dedicated to providing exceptional medical care."
      />

      <Box sx={styles.filterSection}>
        {specializations.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setSelected(item)}
            color={selected === item ? "primary" : "default"}
            sx={styles.chip}
          />
        ))}
      </Box>

      <Box sx={styles.doctorsSection}>
        <Grid container spacing={4} sx={styles.grid}>
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
