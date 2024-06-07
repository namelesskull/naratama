// eslint-disable-next-line react/prop-types
const AvailCard = ({ image, city }) => {
  return (
    <div className='mb-16 lg:mb-0'>
      <div className='relative max-w-sm w-[168px] h-36 lg:h-[237px] lg:w-[160px] overflow-hidden'>
        <img
          className='w-full h-[192px] object-cover'
          src={image}
          alt='Sunset in the mountains'
        />
        <div className='absolute bottom-0 left-0 right-0 lg:px-6 h-[45px] mt-4 bg-black text-white'>
          <div className='text-xs lg:text-[16px] text-center font-sequel-sans-ld mt-[15px]'>
            {city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailCard;
