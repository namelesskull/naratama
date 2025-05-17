import { useEffect } from 'react';
import { linkPageView } from '../lib/fbEvents';
import background from '../assets/images/link.jpg';

export default function LinkPage() {
  const links = [
    {
      title: 'Whatsapp',
      url: 'https://bit.ly/adm-naratama',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/naratama.graduation',
    },
    {
      title: 'Tiktok',
      url: 'https://www.tiktok.com/@naratama.graduation',
    },
    {
      title: 'Website',
      url: '/',
    },
  ];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    linkPageView();
  }, []);

  return (
    <>
      <div
        className='h-screen flex flex-col items-center justify-center bg-blend-overlay'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className='flex items-center my-6'>
          <div className='flex flex-col font-normal text-3xl items-start text-white'>
            <h1>Lets get in touch!</h1>
          </div>
        </div>
        <div className='max-w-xl w-full'>
          <div className='px-6 py-6'>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className='block mb-4 px-3 py-1 border rounded-full'
              >
                <div className='text-base font-ubuntu text-white text-center font-medium'>
                  {link.title}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <div className='w-28 mx-auto mb-2'>
            <img
              src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/logo.png'
              alt='naratama'
            />
          </div>
          <h1 className='text-white text-xs'>
            &copy; {currentYear} by Naratama Graduation | All right reserved
          </h1>
        </div>
      </div>
    </>
  );
}
