const FooterSection = () => {
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
    <main className='h-screen flex flex-col'>
      <div className='bg-black h-1/2 flex justify-center items-center'>
        <div>
          <h1 className='text-white font-bold text-[36px] text-center mb-2 font-sequel-sans-md tracking-[0.1em]'>
            BOOK YOUR SESSION NOW
          </h1>
          <div className='w-full flex justify-center'>
            <a href='https://bit.ly/admin-naratama'>
              <div className='flex border-2 items-center border-white px-12 w-fit rounded-full hover:bg-naratama-300'>
                <h1 className='text-white text-center font-sequel-sans-ld font-medium text-2xl tracking-[0.2em]'>
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
      <div className='flex flex-col justify-between h-1/2 p-12'>
        <div className='flex justify-between'>
          <img
            className='h-12 w-auto'
            src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logoDark.png'
            alt=''
          />
          <div>
            <button
              onClick={scrollToTop}
              className='inline-block rounded-full bg-black p-2 text-white shadow transition hover:bg-naratama-400'
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
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p>+62 819-4370-2682</p>
            <p>Sleman, D. I. Yogyakarta, 5581</p>
            <p>adm.graduation@naratamascape.com</p>
          </div>
          <div className='flex flex-col items-end'>
            <ul className='flex space-x-8 mt-8'>
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
              <li>
                <a
                  className='text-black transition hover:underline'
                  href='/faq'
                >
                  F.A.Q
                </a>
              </li>
            </ul>
            <p className='text-center text-black lg:text-right'>
              &copy; {currentYear} by Naratama Graduation | All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FooterSection;
