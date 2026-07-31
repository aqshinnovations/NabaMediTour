import IMCBox from "../../components/IMCBox";
import IMCTypography from "../../components/IMCTypography";
import HospitalCard from "../../components/HospitalCard";
import { hospitals } from "../../data/hospitals";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";

const Hospitals = () => {
  return (
    <>
      {/* Hero Section */}
      <IMCBox
        style={{
          width: "100%",
          minHeight: 260,
          background: "linear-gradient(90deg,#0c8b93 0%, #157f98 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <IMCTypography
          size={fontSizes.xxxl}
          weight={fontWeights.bold}
          color={colors.white}
        >
          Partner Hospitals
        </IMCTypography>

        <IMCTypography
          size={fontSizes.md}
          color={colors.white}
          style={{
            marginTop: 16,
            maxWidth: 700,
            opacity: 0.95,
          }}
        >
          Internationally accredited hospitals with world-class facilities and
          patient care standards.
        </IMCTypography>
      </IMCBox>

      {/* Hospital List */}
      <IMCBox
        style={{
          maxWidth: "1280px",
          margin: "60px auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(520px,1fr))",
          gap: "28px",
        }}
      >
        {hospitals.map((hospital) => (
          <HospitalCard
            id={hospital.id}
            key={hospital.id}
            image={hospital.image}
            name={hospital.name_en}
            location="India"
            description={hospital.description_en}
            specializations={
              hospital.facilities.length
                ? hospital.facilities.map((x) => x.name_en)
                : ["Cardiology", "Neurology", "Orthopedics", "Oncology"]
            }
          />
        ))}
      </IMCBox>
    </>
  );
};

export default Hospitals;
