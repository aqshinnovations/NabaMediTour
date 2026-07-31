import IMCBox from "../../components/IMCBox";
import HospitalCard from "../../components/HospitalCard";
import { hospitals } from "../../data/hospitals";
import PageHero from "../../components/PageHero";

const Hospitals = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Our Hospitals"
        description="Partner hospitals equipped with world-class facilities and advanced medical technology."
      />

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
