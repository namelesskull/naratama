/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-square.png';

const Header = ({ dRef }) => {
  const testimoniClick = () => {
    if (dRef.current) {
      dRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                to='https://www.naratamascape.com/admin.naratama'
              >
                Contact
              </Link>
            </li>
            <li>
              <button className='text-black text-xs' onClick={testimoniClick}>
                Testimoni
              </button>
            </li>
          </ul>
          {/* <div className='block md:hidden'>
            <a
              href='https://www.naratamascape.com/admin.naratama'
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
