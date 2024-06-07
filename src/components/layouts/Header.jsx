import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-square.png';

const Header = () => {
  return (
    <div>
      <header className='fixed top-0 left-0 right-0 z-20 bg-white'>
        <div className='flex h-10 px-4 items-center justify-between'>
          <div className='max-h-full'>
            <img className='h-4' src={logo} alt='logo' />
          </div>
          <ul className='flex items-center gap-6 text-sm'>
            <li>
              <Link className='text-black text-xs' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                className='text-black text-xs'
                to='https://www.instagram.com/naratama.graduation'
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className='text-black text-xs'
                to='https://www.instagram.com/naratama.graduation'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* <div className='block md:hidden'>
            <a
              href='https://bit.ly/admin-naratama'
              className='p-0.5 text-black border text-xs border-black'
            >
              Contact Us
            </a>
          </div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
