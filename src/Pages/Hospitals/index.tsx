import IMCBox from "../../components/IMCBox";
import HospitalCard from "../../components/HospitalCard";
import PageHero from "../../components/PageHero";

import { hospitals } from "../../data/hospitals";
import { styles } from "./styles";

const Hospitals = () => {
  return (
    <>
      <PageHero
        title="Our Hospitals"
        description="Partner hospitals equipped with world-class facilities and advanced medical technology."
      />

      <IMCBox style={styles.hospitalsContainer}>
        {hospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            id={hospital.id}
            image={hospital.image}
            name={hospital.name_en}
            location="India"
            description={hospital.description_en}
            specializations={hospital.facilities.map(
              (facility) => facility.name_en,
            )}
          />
        ))}
      </IMCBox>
    </>
  );
};

export default Hospitals;
