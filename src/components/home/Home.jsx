
import HeroSection from './HeroSection.jsx';
import { StatsSection } from './StatsSection.jsx';
import {HowItWorks} from './HowItWorks.jsx';
import { BloodGroupsSection } from './BloodGroupsSection.jsx';
import { CTASection } from './CTASection.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <BloodGroupsSection />
      <CTASection />
    </>
  );
};

export default Home;

