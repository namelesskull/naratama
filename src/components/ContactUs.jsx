export const ContactUs = () => {
  return (
    <>
      <div className='bg-black h-full'>
        <div className='py-16'>
          <h1
            data-aos='fade-up'
            className='text-white font-ubuntu font-medium text-base text-center mb-1'
          >
            BOOK YOUR SESSION NOW !
          </h1>
          <div className='w-full flex justify-center'>
            <a href='https://www.naratamascape.com/admin.naratama'>
              <div
                data-aos='fade-up'
                className='flex border items-center border-white px-4 w-fit rounded-full'
              >
                <h1 className='text-white text-center font-ubuntu font-medium text-sm tracking-2'>
                  CONTACT US
                </h1>
                <span className='text-white pl-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
