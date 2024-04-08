import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <header className='bg-white fixed top-0 left-0 right-0 z-20'>
          <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-end'>
              <div className='hidden md:block'>
                <nav aria-label='Global'>
                  <ul className='flex items-center gap-6 text-sm'>
                    <li>
                      <Link
                        className='text-gray-500 transition hover:text-naratama-300'
                        to='/'
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='flex items-center gap-4'>
                <div className='block md:hidden'>
                  <button
                    onClick={handleClick}
                    aria-label='button-bread'
                    className='rounded p-2 text-gray-600 transition hover:text-gray-600/75'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
      {isOpen ? (
        <div className='fixed top-12 shadow-md bg-white p-4 rounded-md right-4 z-20'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <a
              href='https://bit.ly/admin-naratama'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black'
            >
              WhatsApp
            </a>
            <a
              href='https://www.instagram.com/naratama.graduation'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black'
            >
              Instagram
            </a>
            <a
              href='https://www.tiktok.com/@naratama.graduation'
              target='_blank'
              rel='noopener noreferrer'
              className='text-black'
            >
              TikTok
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
