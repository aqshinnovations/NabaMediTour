import Hero from "./components/Hero";
import HospitalSection from "./components/HospitalSection";
import DoctorsSection from "./components/DoctorsSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import ContactCTA from "../../components/ContactCTA";
import TestimonySection from "./components/TestimonySection";
const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <DoctorsSection />
      <HospitalSection />
      <CTASection />
      <TestimonySection />
      <ContactCTA />
    </>
  );
};

export default Home;
