import background from '../../assets/images/cover-mobile.jpg';

const HeroPhone = () => {
  return (
    <>
      <div
        className='text-center mt-16 animate-fadeIn h-[70vh]'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='pt-24'>
          <h1 className='text-2xl'>NARATAMA GRADUATION</h1>
          <h2 className='text-xs tracking-1'>
            GRADUATION PHOTO | HIPPOCRATIC OATH
          </h2>
        </div>
      </div>
      <div className='text-center mt-8'>
        <h1 className='font-medium text-xl mb-2'>About Us</h1>
        <p className='font-light text-xs'>
          Naratama Graduation is a graduation documentation service estabilished
          in 2023. The name Naratama comes from Sanskrit,means main human or VIP{' '}
          {'(Very Important Person)'}. In line with its name, we are committed
          to creating elegant and classy documentation results. We believe tht
          everyone deserves the best service and high-quality documentation.
        </p>
      </div>
    </>
  );
};

export default HeroPhone;
