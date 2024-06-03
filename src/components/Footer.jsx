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
    <footer className='bg-white mt-2 flexx flex-col'>
      <div className='flex w-full justify-between px-2'>
        <div>
          <img
            className='h-10 w-auto'
            src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logoDark.png'
            alt=''
          />
        </div>
        <div>
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
      </div>
      <div>
        <div className='flex flex-col text-xs font-light p-2 my-8 space-y-1'>
          <p>+62 819-4370-2682</p>
          <p>Sleman,D.I. Yogyakarta,5581</p>
          <p>adm.graduation@naratamascape.com</p>
          <p>
            &copy; {currentYear} by Naratama Graduation | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
