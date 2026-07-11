import header from "./header.json";
import form from "./form.json";
import home from "./home/home.json";
import blog from "./blog/blog.json"
// Cardiac Treatments & Surgeries
import cardiacTreatmentAndSurgeries from "./treatmentAndSurgeries/CardiacTreatmentsAndSurgeries.json";
import PediatricCardiacTreatmentAndSurgeries from "./treatmentAndSurgeries/PediatricCardiacTreatmentAndSurgeries.json";
import treatmentsAndSurgeriesByOrthopaedist from "./treatmentAndSurgeries/TreatmentsAndSurgeriesByOrthopaedists.json";
import PediatricOrthoTreatmentAndSurgeries from "./treatmentAndSurgeries/PediatricOrthoTreatmentAndSurgeries.json";
import BoneTumor from "./treatmentAndSurgeries/BoneTumors.json"
// Transplants & Replacements
import TransplantsAndReplacements from "./TransplantsAndReplacements/TransplantsAndReplacements.json";
// doctors
import Doctors from "./doctors/doctors.json";
import Hospitals from "./hospitals/hospitals.json";
import Footer from "./footer.json"

const en = {
  ...header,
  ...form,
  ...home,
  ...cardiacTreatmentAndSurgeries,
  ...PediatricCardiacTreatmentAndSurgeries,
  ...treatmentsAndSurgeriesByOrthopaedist,
  ...PediatricOrthoTreatmentAndSurgeries, 
  ...BoneTumor,
  ...TransplantsAndReplacements,
  ...blog,
  ...Doctors,
  ...Hospitals,
  ...Footer

};

export default en;
