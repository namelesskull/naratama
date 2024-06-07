import { useRef } from 'react';
import ReviewsSection from '../components/ReviewsSection';
import AboutScreen from '../components/v2/AboutScreen';
import AvailableCarousel from '../components/v2/AvailabeCarousel';
import FooterSection from '../components/v2/FooterSection';
import GallerySection from '../components/v2/GallerySection';
import HeaderScreen from '../components/v2/HeaderScreen';
import WhyUs from '../components/WhyUs';
import Header from '../components/layouts/Header';
import HeroPhone from '../components/v2/HeroPhone';
import Footer from '../components/Footer';
import { ContactUs } from '../components/ContactUs';
import GalleryHP from '../components/v2/GelleryHP';

const Home = () => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  return (
    <>
      <main className='hidden lg:block'>
        <HeaderScreen aRef={aRef} bRef={bRef} cRef={cRef} />
        <AboutScreen aboutRef={aRef} />
        <AvailableCarousel citiesRef={bRef} />
        <GallerySection galleryRef={cRef} />
        <WhyUs />
        <ReviewsSection />
        <FooterSection />
      </main>
      <main className='block lg:hidden'>
        <Header />
        <HeroPhone />
        <AvailableCarousel />
        <GalleryHP />
        <WhyUs />
        <ReviewsSection />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default Home;
