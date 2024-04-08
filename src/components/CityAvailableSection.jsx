const CityAvailabilitySection = () => {
  const cities = [
    {
      title: 'Jakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/monas.jpg',
    },
    {
      title: 'Jogja',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/jogja.jpg',
    },
    {
      title: 'Semarang',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/semarang.jpg',
    },
    {
      title: 'Solo',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/solo.jpg',
    },
    {
      title: 'Purwokerto',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/purwokerto.webp',
    },
  ];

  return (
    <section>
      <div className='max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
          <div className='mx-auto max-w-lg text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right'>
            <h2 className='text-2xl font-semibold sm:text-4xl'>
              We are available in your city
            </h2>

            <p className='mt-4 text-gray-600'>
              Our dedicated team covers universities across various cities in
              Indonesia, ensuring you receive prompt and efficient service. Here
              are our coverage areas.
            </p>
          </div>

          <div
            id='scrollContainer'
            className='flex navigation overflow-x-scroll'
            style={{ '--scrollbar-width': '8px', '--scrollbar-height': '8px' }}
          >
            <div className='flex w-fit-content'>
              {cities.map((city, index) => (
                <div
                  key={index}
                  className='w-36 h-36 m-4 bg-gray-300 rounded-lg flex-shrink-0'
                >
                  <img
                    src={city.imageUrl}
                    alt={city.title}
                    className='w-full h-3/4 rounded-t-lg'
                  />
                  <div className='h-1/4 rounded-b-lg bg-naratama-100'>
                    <h1 className='text-center py-1 font-medium text-lg'>
                      {city.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityAvailabilitySection;
