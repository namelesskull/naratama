const WhyUs = () => {
  return (
    <section className='text-gray-800 mt-8'>
      <div className='container mx-auto flex flex-col p-6'>
        <h2 className='py-4 text-3xl font-bold text-center'>Why Choose Us?</h2>
        <div className='divide-y divide-gray-300'>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='md:w-16 md:h-16 w-12 h-12 text-black'
              >
                <path
                  fillRule='evenodd'
                  d='M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='flex flex-col justify-center max-w-3xl col-span-full lg:col-span-3 text-left'>
              <span className='text-xl text-start font-bold md:text-2xl'>
                Professional Team
              </span>
              <span className='mt-4 text-gray-700 text-justify'>
                Our team of professional and experienced photographers and
                videographers are experts in capturing graduation moments. We
                have experience documenting various graduation ceremonies at
                prestigious universities across Indonesia. We understand that
                graduation is a special and important moment for you, so we will
                work with full dedication to produce the best documentation.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <svg
                fill='currentColor'
                viewBox='0 0 56 56'
                xmlns='http://www.w3.org/2000/svg'
                className='md:w-16 md:h-16 w-12 h-12 text-black'
              >
                <path d='M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 17.6874 38.5703 C 15.1796 38.5703 13.9140 37.3281 13.9140 34.8906 L 13.9140 22.375 C 13.9140 19.9140 15.1796 18.6719 17.6874 18.6719 L 20.3827 18.6719 C 21.3202 18.6719 21.6014 18.4609 22.1405 17.8984 L 23.1014 16.8203 C 23.7109 16.1640 24.3202 15.8125 25.5390 15.8125 L 30.3202 15.8125 C 31.5390 15.8125 32.1483 16.1640 32.7343 16.8203 L 33.6952 17.8984 C 34.2343 18.5078 34.5155 18.6719 35.4530 18.6719 L 38.2655 18.6719 C 40.7265 18.6719 42.0155 19.9140 42.0155 22.375 L 42.0155 34.8906 C 42.0155 37.3281 40.7265 38.5703 38.2655 38.5703 Z M 27.8358 35.2422 C 31.7265 35.2422 34.8436 32.1953 34.8436 28.1875 C 34.8436 24.2969 31.7265 21.1797 27.8358 21.1797 C 23.9452 21.1797 20.7812 24.2969 20.7812 28.1875 C 20.7812 32.125 23.9452 35.2422 27.8358 35.2422 Z M 37.0468 25.0703 C 37.9140 25.0703 38.6405 24.3672 38.6171 23.4766 C 38.6171 22.5860 37.9140 21.8828 37.0468 21.8828 C 36.1796 21.8828 35.4530 22.5860 35.4530 23.4766 C 35.4530 24.3672 36.1796 25.0703 37.0468 25.0703 Z M 27.8358 33.2031 C 25.0702 33.2031 22.8202 30.9766 22.8202 28.1875 C 22.8202 25.4219 25.0702 23.1953 27.8358 23.1953 C 30.5780 23.1953 32.8280 25.4219 32.8280 28.1875 C 32.8280 30.9766 30.5780 33.2031 27.8358 33.2031 Z' />
              </svg>
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-xl font-bold md:text-2xl'>
                Advance Gear
              </span>
              <span className='mt-4 text-gray-700 text-justify'>
                We use modern and high-quality equipment to produce the best
                photos and videos. Our equipment includes DSLR and mirrorless
                cameras with high-quality lenses, as well as professional
                lighting and audio equipment. Using modern and high-quality
                equipment will produce sharp, clear, and memorable graduation
                documentation.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#ffffff'
                viewBox='0 0 24 24'
                className='md:w-16 md:h-16 w-12 h-12 text-black'
              >
                <rect
                  x='2'
                  y='2'
                  width='20'
                  height='20'
                  rx='2'
                  fill='currentColor'
                />
                <path d='M18,17H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2h7a1,1,0,0,1,0,2ZM6.5,6.5A1.5,1.5,0,1,0,8,8,1.5,1.5,0,0,0,6.5,6.5Zm0,4A1.5,1.5,0,1,0,8,12,1.5,1.5,0,0,0,6.5,10.5Zm0,4A1.5,1.5,0,1,0,8,16,1.5,1.5,0,0,0,6.5,14.5Z' />
              </svg>
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-xl font-bold md:text-2xl'>
                Multiple Packages
              </span>
              <span className='mt-4 text-gray-700 text-justify'>
                We offer various graduation documentation packages that can be
                customized to your needs and budget. We provide photo, video,
                and combination photo & video packages with various price
                options. You can choose the package that suits your needs and
                budget, ensuring you get the best graduation documentation
                without overspending.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='md:w-16 md:h-16 w-12 h-12 text-black'
              >
                <path
                  fillRule='evenodd'
                  d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-xl font-bold md:text-2xl'>
                Elegant and Classy
              </span>
              <span className='mt-4 text-gray-700 text-justify'>
                We are committed to producing elegant and classy graduation
                photos and videos, capturing your special moment perfectly. We
                have a distinctive photography and videography style that is
                elegant, classy, and timeless. Your graduation documentation
                will look professional and memorable, allowing you to proudly
                remember your graduation moment.
              </span>
            </div>
          </div>
          <div className='grid justify-center grid-cols-4 p-8 mx-auto space-y-4 lg:space-y-0'>
            <div className='flex items-center justify-center lg:col-span-1 col-span-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 453.165 453.165'
                className='md:w-16 md:h-16 w-12 h-12 text-black'
              >
                <g>
                  <path d='M435.783,139.576c-6.025,11.601-18.147,19.549-32.098,19.549h-11.372c8.509,20.83,13.213,43.603,13.213,67.457   c0,98.669-80.273,178.943-178.943,178.943S47.639,325.252,47.639,226.583S127.913,47.64,226.583,47.64   c31.485,0,61.62,8.175,88.192,23.29l0.055-0.055c7.035,3.992,13.809,8.471,20.275,13.411l-29.965,29.965   c-3.527,3.527-4.582,8.832-2.674,13.441c1.909,4.609,6.406,7.614,11.395,7.614h89.825c6.812,0,12.333-5.522,12.333-12.334V33.147   c0-4.989-3.005-9.486-7.613-11.395c-4.61-1.909-9.914-0.853-13.441,2.674L369.03,50.36c-41.272-33.428-91.761-50.36-142.447-50.36   C101.645,0.001,0,101.645,0,226.583s101.645,226.582,226.583,226.582S453.165,351.52,453.165,226.583   C453.165,195.77,446.973,166.38,435.783,139.576z' />
                  <path d='M84.229,226.583c0,78.62,63.734,142.354,142.354,142.354c78.62,0,142.355-63.734,142.355-142.354H226.583V84.228   C147.962,84.228,84.229,147.962,84.229,226.583z' />
                </g>
              </svg>
            </div>
            <div className='flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left'>
              <span className='text-xl font-bold md:text-2xl'>
                Timeless Photos
              </span>
              <span className='mt-4 text-gray-700 text-justify'>
                We understand that graduation photos are memories that will be
                cherished forever. Therefore, we offer timeless photos that will
                never fade. Our timeless photos have beautiful composition,
                perfect lighting, and natural editing. With timeless photos, you
                can reminisce about your graduation moment with happiness and
                nostalgia whenever you see them.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
