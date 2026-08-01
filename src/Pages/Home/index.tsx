import Hero from "./components/Hero";
import HospitalSection from "./components/HospitalSection";
import DoctorsSection from "./components/DoctorsSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <HospitalSection />
      <DoctorsSection />
      <CTASection />
    </>
  );
};

export default Home;
