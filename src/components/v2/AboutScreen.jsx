/* eslint-disable react/prop-types */
import { forwardRef, useState } from 'react';
import aboutImage from '../../assets/images/about.jpg';
import { useEffect } from 'react';
import { useRef } from 'react';

const AboutScreen = forwardRef(({ aboutRef }) => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <main ref={aboutRef} className='flex h-screen my-12'>
        <aside
          ref={ref}
          className={`w-2/5 flex justify-center items-end transition-opacity duration-1000 ${
            isVisible ? 'animate-slideInFromLeft' : 'opacity-0'
          }`}
        >
          <img className='w-auto h-[90%]' src={aboutImage} alt='about us' />
        </aside>
        <div className='w-3/5 flex flex-col px-8'>
          <div className='h-1/2 flex justify-end mt-24'>
            <p>{currentYear}</p>
          </div>
          <div ref={ref} className='h-1/2 flex flex-col justify-end'>
            <h1 className='text-4xl font-medium mb-8'>About Us</h1>
            <p className='text-xl font-light'>
              Naratama Graduation is a graduation documentation service
              estabilished in 2023. The name Naratama comes from Sanskrit,means
              main human or VIP {'(Very Important Person)'}. In line with its
              name, we are committed to creating elegant and classy
              documentation results. We believe tht everyone deserves the best
              service and high-quality documentation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
});

AboutScreen.displayName = 'AboutScreen';
export default AboutScreen;
