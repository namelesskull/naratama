const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8'>
          <button
            onClick={scrollToTop}
            className='inline-block rounded-full bg-naratama-300 p-2 text-white shadow transition hover:bg-naratama-400 sm:p-3 lg:p-4'
            href='#MainContent'
          >
            <span className='sr-only'>Back to top</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>

        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <div className='flex justify-center lg:justify-start'>
              <div>
                <img
                  className='h-10 w-auto'
                  src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logoDark.png'
                  alt=''
                />
              </div>
            </div>

            <p className='mx-auto mt-6 text-sm max-w-md text-center leading-relaxed text-black lg:text-left'>
              Cause every special moments has a special story to tell. Let us
              help you to tell yours.
            </p>
          </div>

          <ul className='mt-12 flex font-medium text-sm flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12'>
            <li>
              <a className='text-black transition hover:underline' href='/'>
                Home
              </a>
            </li>

            <li>
              <a
                className='text-black transition hover:underline'
                href='https://bit.ly/admin-naratama'
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                className='text-black transition hover:underline'
                href='https://www.instagram.com/naratama.graduation'
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <p className='mt-12 text-center text-sm text-black lg:text-right'>
          &copy; {currentYear} by Naratama Graduation | All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
