/* eslint-disable react/prop-types */
import background from '../../assets/images/desktop.jpg';
import logoext from '../../assets/images/logo-ext-white.png';

const HeaderScreen = ({ aRef, bRef, cRef }) => {
  const aboutClick = () => {
    if (aRef.current) {
      aRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const citiesClick = () => {
    if (bRef.current) {
      bRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const galleryClick = () => {
    if (cRef.current) {
      cRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div
        className='h-screen bg-white bg-cover'
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav className='flex justify-between py-12 px-16'>
          <div>
            <img className='h-[32px]' src={logoext} alt='logo' />
          </div>
          <div>
            <ul className='flex mt-4 font-sequel-sans-ld'>
              <li className='mx-6'>
                <button>Home</button>
              </li>
              <li className='mx-6'>
                <button onClick={aboutClick}>About Us</button>
              </li>
              <li className='mx-6'>
                <button onClick={citiesClick}>Cities</button>
              </li>
              <li className='mx-6'>
                <button onClick={galleryClick}>Gallery</button>
              </li>
            </ul>
          </div>
          <div>
            <a href='https://bit.ly/adm-naratama'>
              <button className='border border-black px-8 py-2 font-sequel-sans-ld'>
                Contact Us
              </button>
            </a>
          </div>
        </nav>
        <div className='text-center mt-12 animate-fadeIn'>
          <h1 className='text-[60px] font-classy-vogue'>NARATAMA GRADUATION</h1>
          <h2 className='text-[14px] tracking-3 font-gilroy-regular'>
            GRADUATION PHOTO VIDEO SERVICES
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeaderScreen;
