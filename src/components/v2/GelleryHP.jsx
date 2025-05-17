/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import cover from '../../assets/images/gallery.jpg';

const GalleryHP = ({ galleryRef }) => {
  return (
    <main
      ref={galleryRef}
      className='lg:h-screen min-h-fit flex lg:flex-row flex-col bg-black'
    >
      <section className='flex lg:w-[50%] px-4 py-12 bg-black h-full text-white'>
        <div className='flex flex-col justify-between'>
          <div data-aos='fade-right' className='flex flex-col mb-12'>
            <h1 className='text-2xl font-bold mb-4 font-sequel-sans-md flex flex-col'>
              <span>We have wonderful</span>photography
            </h1>
            <span className='w-1/2 lg:my-6 my-1 border border-b border-white'></span>
          </div>
          <div className='flex flex-row items-end'>
            <p
              data-aos='fade-right'
              className='mt-4 mr-20 font-sequel-sans-ld text-sm flex flex-col'
            >
              Feast your eyes on some stunning
              <span>photos we captured for our</span>
              <span>beloved client!</span>
            </p>
            <a
              data-aos='fade-left'
              className='border px-2 text-center py-1 text-xs font-sequel-sans-md'
              href='https://www.instagram.com/naratama.graduation'
            >
              Open Gallery
            </a>
          </div>
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

const ForwardedGallerySection = forwardRef(GalleryHP);
ForwardedGallerySection.displayName = 'GalleryHP';

export default GalleryHP;
