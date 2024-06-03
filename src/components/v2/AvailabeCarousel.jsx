/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import AvailCard from './AvailCard';
import { forwardRef } from 'react';

const AvailableCarousel = ({ citiesRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: false,
  };

  const cities = [
    {
      title: 'Jakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/monas.jpg',
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
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/purwokerto.webp',
    },
  ];
  return (
    <main
      ref={citiesRef}
      className='lg:h-screen flex items-center flex-col lg:flex-row mt-12 lg:mt-0'
    >
      <section className='lg:w-1/2'>
        <div className='flex flex-col justify-center lg:pl-20 my-4 lg:my-0'>
          <h1 className='lg:text-5xl text-xl font-medium lg:font-normal text-center lg:text-start my-2 lg:my-6'>
            We are available in your city
          </h1>
          <div className='lg:w-2/3'>
            <p className='lg:text-start text-center lg:text-xl text-xs font-light lg:font-normal'>
              Our dedicated team covers universities across various cities in
              Indonesia, ensuring you receive prompt and efficient service. Here
              are our coverage areas.
            </p>
          </div>
        </div>
      </section>
      <section className='lg:w-1/2 w-full'>
        <div className='slider-container'>
          <Slider {...settings}>
            {cities.map((city, index) => (
              <div key={index}>
                <AvailCard city={city.title} image={city.imageUrl} />
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
