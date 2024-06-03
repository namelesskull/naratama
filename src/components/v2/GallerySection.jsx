/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import cover from '../../assets/images/gallery.jpg';

const GallerySection = ({ galleryRef }) => {
  return (
    <main ref={galleryRef} className='lg:h-screen flex lg:flex-row flex-col'>
      <section className='flex justify-center items-center lg:w-[40%] p-24 bg-black h-full text-white'>
        <div className='flex flex-col w-fit'>
          <h1 className='lg:text-5xl text-xl mb-4'>
            We have wonderful photography
          </h1>
          <span className='w-1/2 lg:my-6 my-1 border border-b border-white'></span>
          <p className='mt-4 w-2/3'>
            Feast your eyes on some stunning photos we captured for our beloved
            client!
          </p>
        </div>
      </section>
      <section
        className='lg:w-[60%] h-[45vh] lg:h-full bg-black'
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></section>
    </main>
  );
};

const ForwardedGallerySection = forwardRef(GallerySection);
ForwardedGallerySection.displayName = 'GallerySection';

export default GallerySection;
