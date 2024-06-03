/* eslint-disable react/prop-types */
import background from '../../assets/images/desktop.jpg';

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
        <nav className='flex justify-between p-6'>
          <div>
            <img src='placeholder.co/100/200' alt='' />
          </div>
          <div>
            <ul className='flex mt-4'>
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
            <a href='https://bit.ly/admin-naratama'>
              <button className='border border-black px-4 py-2'>
                Contact Us
              </button>
            </a>
          </div>
        </nav>
        <div className='text-center mt-28 animate-fadeIn'>
          <h1 className='text-8xl'>NARATAMA GRADUATION</h1>
          <h2 className='text-2xl mt-4 tracking-3'>
            GRADUATION PHOTO | HIPPOCRATIC OATH
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeaderScreen;
