/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import cover from '../../assets/images/gallery.jpg';

const GallerySection = ({ galleryRef }) => {
  return (
    <main
      ref={galleryRef}
      className='lg:h-screen flex lg:flex-row flex-col justify-between'
    >
      <section className='flex flex-col justify-center lg:w-[50%] p-24 bg-black h-full text-white'>
        <div className='flex flex-col w-fit mb-32'>
          <h1
            data-aos='fade-right'
            className='lg:text-5xl text-[36px] font-bold mb-4 font-sequel-sans-md flex flex-col'
          >
            <span data-aos='fade-right'>We have wonderful</span>photography
          </h1>
          <span
            data-aos='fade-right'
            className='w-1/2 lg:my-6 my-1 border border-b border-white'
          ></span>
          <p
            data-aos='fade-right'
            className='mt-4 w-2/3 font-sequel-sans-ld text-[18px]'
          >
            Feast your eyes on some stunning photos we captured for our beloved
            client!
          </p>
        </div>
        <div data-aos='fade-right'>
          <a
            className='border px-12 py-1 text-xl font-sequel-sans-md'
            href='https://www.instagram.com/naratama.graduation'
          >
            Open Gallery
          </a>
        </div>
      </section>
      <section
        className='lg:h-full bg-transparent'
        style={{
          // backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={cover} className='w-full h-full'></img>
      </section>
    </main>
  );
};

const ForwardedGallerySection = forwardRef(GallerySection);
ForwardedGallerySection.displayName = 'GallerySection';

export default GallerySection;
