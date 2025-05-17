import naratamaLogo from '../assets/images/naratama-text-black.png';

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
    <footer className='bg-white mt-8 flexx flex-col'>
      <div className='flex w-full justify-between items-center px-2'>
        <div data-aos='fade-right'>
          <img className='h-6 w-auto' src={naratamaLogo} alt='naratama' />
        </div>
        <div>
          <button
            data-aos='fade-up'
            onClick={scrollToTop}
            className='inline-block rounded-full bg-black p-1 text-white shadow transition hover:bg-naratama-400 sm:p-3 lg:p-4'
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
      </div>
      <div>
        <div className='flex flex-col text-xs font-light px-2 pt-8 my-8 space-y-1'>
          <p>+62 819-4370-2682</p>
          <p>Sleman, D. I. Yogyakarta, 5581</p>
          <a href='mailto:adm.naratamagraduation@gmail.com'>
            <p>adm.naratamagraduation@gmail.com</p>
          </a>
          <p>
            &copy; {currentYear} by Naratama Graduation | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
