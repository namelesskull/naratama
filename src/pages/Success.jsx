export const Success = () => {
  return (
    <div className='bg-white h-screen justify-center items-center flex'>
      <div className='bg-white p-6  md:mx-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='text-black w-16 h-16 mx-auto my-6'
        >
          <path
            fillRule='evenodd'
            d='M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
            clipRule='evenodd'
          />
        </svg>

        <div className='text-center font-gilroy-regular'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Success!
          </h3>
          <p className='text-gray-600 mt-2'>Thank you for trusting on us.</p>
          <div className='w-full fixed bottom-6 left-0 right-0'>
            <p className='text-gray-600 text-xs'>
              Segera lakukan pembayaran DP dalam 24 jam
            </p>
            <p className='text-gray-600 text-xs'>
              dan konfirmasi kepada admin.
            </p>
          </div>

          {/* <div className='py-10 text-center'>
            <a
              href='/'
              className='px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3'
            >
              GO BACK
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
