export const ContactUs = () => {
  return (
    <>
      <div className='w-screen bg-black'>
        <div className='py-12'>
          <h1 className='text-white font-ubuntu font-medium text-sm text-center mb-1'>
            INTERESTED TO BOOK?
          </h1>
          <div className='w-full flex justify-center'>
            <a href='https://bit.ly/admin-naratama'>
              <div className='flex border items-center border-white px-4 w-fit rounded-full'>
                <h1 className='text-white text-center font-ubuntu font-medium text-sm'>
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