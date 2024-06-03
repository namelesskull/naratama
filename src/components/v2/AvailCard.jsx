// eslint-disable-next-line react/prop-types
const AvailCard = ({ image, city }) => {
  return (
    <div className='mx-2 mb-16 lg:mb-0'>
      <div className='relative max-w-sm w-full h-36 lg:h-64 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={image}
          alt='Sunset in the mountains'
        />
        <div className='absolute bottom-0 left-0 right-0 lg:px-6 lg:py-4 pt-2 bg-black text-white'>
          <div className='lg:font-bold text-xs lg:text-xl mb-2 text-center'>
            {city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailCard;
