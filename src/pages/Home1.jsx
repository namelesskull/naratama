import CityAvailabilitySection from '../components/CityAvailableSection';
import { ContactUs } from '../components/ContactUs';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Divider from '../components/global/Divider';
import HeroSection from '../components/HeroSection';
import ReviewsSection from '../components/ReviewsSection';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Divider title='Cities' />
      <CityAvailabilitySection />
      <Divider title='our Gallery' />
      <Gallery />
      <Divider />
      <WhyUs />
      <Divider title='Reviews' />
      <ReviewsSection />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
