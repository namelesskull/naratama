import background from '../../assets/images/cover-mobile.jpg';

const HeroPhone = () => {
  return (
    <>
      <div
        className='text-center mt-10 animate-fadeIn h-[70vh]'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='pt-24'>
          <h1 className='text-3xl font-classy-vogue'>NARATAMA GRADUATION</h1>
          <h2 className='text-[10px] tracking-[0.26em] font-sequel-sans-md'>
            GRADUATION PHOTO VIDEO SERVICES
          </h2>
        </div>
      </div>
      <div data-aos='fade-up' className='text-center mt-[40px]'>
        <h1 className='font-semibold text-2xl mb-3 font-sequel-sans-md'>
          About Us
        </h1>
        <p className='flex flex-col text-[14px] mx-4 font-sf-pro-light'>
          Naratama Graduation is a graduation documentation service established
          in 2023. The name Naratama comes from Sanskrit, means main human or
          VIP {'(Very Important Person)'}. In line with its name, we are
          committed to creating elegant and classy documentation results. We
          believe that everyone deserves the best service and high-quality
          documentation.
        </p>
      </div>
    </>
  );
};

export default HeroPhone;
