const Gallery = () => {
  return (
    <section>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
          <div className='grid p-6 bg-naratama-100 rounded place-content-center sm:p-8'>
            <div className='max-w-md mx-auto text-center lg:text-left'>
              <header>
                <h2 className='text-xl font-semibold text-gray-900 sm:text-3xl'>
                  We have wonderful photography
                </h2>

                <p className='mt-4 text-gray-700'>
                  Feast your eyes on some stunning photos we captured for our
                  beloved client!
                </p>
              </header>

              <a
                href='https://www.instagram.com/naratama.graduation'
                className='inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-naratama-300 border rounded hover:shadow-lg hover:bg-naratama-400 focus:outline-none focus:ring'
              >
                Open Gallery
              </a>
            </div>
          </div>

          <div className='lg:col-span-2 lg:py-8'>
            <ul className='grid grid-cols-2 gap-4'>
              <li>
                {/* <div className='block group'>
                  <img
                    src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/1.png'
                    alt=''
                    className='object-cover w-full rounded aspect-square'
                  />
                </div> */}
              </li>

              <li>
                {/* <div className='block group'>
                  <img
                    src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/2.png'
                    alt=''
                    className='object-cover w-full rounded aspect-square'
                  />
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
