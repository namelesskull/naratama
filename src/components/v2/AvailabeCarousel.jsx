/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import AvailCard from './AvailCard';
import { forwardRef } from 'react';
import AvailCardHP from './AvailCardHP';
import jakarta from '../../assets/images/monas.webp';
import bandung from '../../assets/images/bandung.jpg';
import jogja from '../../assets/images/jogja.jpg';
import semarang from '../../assets/images/semarang.jpg';
import purwokerto from '../../assets/images/purwokerto.jpg';
import solo from '../../assets/images/solo.jpg';

const AvailableCarousel = ({ citiesRef }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
  };

  const settingsHp = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    arrows: false,
  };

  const cities = [
    {
      title: 'Jakarta',
      imageUrl: jakarta,
    },
    {
      title: 'Bandung',
      imageUrl: bandung,
    },
    {
      title: 'Jogja',
      imageUrl: jogja,
    },
    {
      title: 'Solo',
      imageUrl: solo,
    },
    {
      title: 'Semarang',
      imageUrl: semarang,
    },
    {
      title: 'Purwokerto',
      imageUrl: purwokerto,
    },
  ];
  return (
    <main
      ref={citiesRef}
      className='lg:h-screen mt-[30px] flex items-center flex-col lg:flex-row lg:mt-0'
    >
      <section className='lg:w-1/2 mb-3 lg:mb-0' data-aos='fade-right'>
        <div className='flex flex-col justify-center lg:pl-20 my-4 lg:my-0'>
          <h1 className='lg:text-5xl font-bold text-2xl font-sequel-sans-md text-center lg:text-start'>
            We are available in your city
          </h1>
          <div className='mt-3 px-4 lg:px-0'>
            <p className='lg:text-start text-[14px] text-center font-sf-pro-light lg:text-[18px] flex flex-col'>
              Our dedicated team covers universities across various cities in
              Indonesia,
              <br className='hidden lg:block' /> ensuring you receive prompt and
              efficient service. Here are our coverage areas.
            </p>
          </div>
        </div>
      </section>
      <section data-aos='fade-left' className='hidden lg:block lg:w-1/2 w-full'>
        <div
          className='flex space-x-4 w-full overflow-x-scroll'
          style={{
            display: 'flex',
            gap: '1rem', // space-x-4 equivalent in Tailwind
            width: '100%',
            overflowX: 'scroll',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // Internet Explorer 10+
          }}
        >
          {/* <Slider {...settings}> */}
          {cities.map((city, index) => (
            <div key={index}>
              <AvailCard city={city.title} image={city.imageUrl} />
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </section>
      <section className='lg:hidden w-full h-full '>
        <div className='slider-container'>
          <Slider {...settingsHp}>
            {cities.map((city, index) => (
              <div key={index}>
                <AvailCardHP city={city.title} image={city.imageUrl} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

const ForwardedAvailableCarousel = forwardRef(AvailableCarousel);
ForwardedAvailableCarousel.displayName = 'AvailableCarousel';

export default AvailableCarousel;
