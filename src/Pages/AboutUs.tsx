//import page components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSections";
import FaqSection from "../components/FaqSection";
//animations 
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";


const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
