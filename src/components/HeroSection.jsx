const HeroSection = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-3xl'>
          <h2 className='text-2xl font-semibold sm:text-4xl'>About us</h2>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
            <img
              alt='Party'
              src='https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/banner.png'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>

          <div className='lg:py-16'>
            <article className='space-y-4 text-gray-600'>
              <p>
                Naratama Graduation is a graduation documentation service
                established in 2023. The name Naratama comes from Sanskrit,
                means main human or VIP (Very Important Person). In line with
                its name, we are committed to creating elegant and classy
                documentation results. We believe that everyone deserves the
                best service and high-quality documentation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
