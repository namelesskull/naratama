/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import AvailCard from './AvailCard';
import { forwardRef } from 'react';
import AvailCardHP from './AvailCardHP';

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
    slidesToShow: 2.7,
    slidesToScroll: 2,
    arrows: false,
  };

  const cities = [
    {
      title: 'Jakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/monas.jpg',
    },
    {
      title: 'Bandung',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/bandung.jpg',
    },
    {
      title: 'Jogja',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/jogja.jpg',
    },
    {
      title: 'Semarang',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/semarang.jpg',
    },
    {
      title: 'Solo',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/solo.jpg',
    },
    {
      title: 'Purwokerto',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/purwokerto.jpg',
    },
  ];
  return (
    <main
      ref={citiesRef}
      className='lg:h-screen mt-[60px] flex items-center flex-col lg:flex-row lg:mt-0'
    >
      <section className='lg:w-1/2 mb-3 lg:mb-0'>
        <div className='flex flex-col justify-center lg:pl-20 my-4 lg:my-0'>
          <h1 className='lg:text-5xl font-bold text-2xl font-sequel-sans-md text-center lg:text-start'>
            We are available in your city
          </h1>
          <div className='mt-3 mx-4'>
            <p className='lg:text-start text-base text-center font-sequel-sans-ld lg:text-[18px] flex flex-col'>
              Our dedicated team covers universities across various cities in
              Indonesia, ensuring you receive prompt and efficient service. Here
              are our coverage areas.
            </p>
          </div>
        </div>
      </section>
      <section className='hidden lg:block lg:w-1/2 w-full mr-16'>
        <div className='slider-container pl-72'>
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index}>
                <AvailCard city={city.title} image={city.imageUrl} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className='lg:hidden w-full h-full px-4'>
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
