// eslint-disable-next-line react/prop-types
const AvailCardHP = ({ image, city }) => {
  return (
    <div className='mb-10 lg:mb-0'>
      <div className='relative w-[120px] h-[165.9px] overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={image}
          alt='Sunset in the mountains'
        />
        <div className='absolute bottom-0 left-0 right-0 lg:px-6 h-[27.5px] mt-4 bg-black text-white'>
          <div className='text-sm text-center font-sequel-sans-ld mt-1'>
            {city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailCardHP;
