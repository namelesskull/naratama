const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Vita',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/vita_review.jpg',
      campuss: 'Universitas Islam Sultan Agung',
      description:
        'gemes banget liat hasilnya. mana ngga pasaran,ngga monoton kaya yang lain. masih bingung milih yang diedit mana,orinya aja udah bagus. fgnya baik banget,bisa mencairkan suasana yang badmood. jadi  pengen wisuda lagi.',
    },
    {
      name: 'Karina',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/karina_review.jpg',
      campuss: 'Universitas Gadjah Mada',
      description:
        'bjir bagus banget videonya. made my day banget kak! suka banget. semoga sukses terus ya kak!!!',
    },
    {
      name: 'Anggita',
      campuss: 'Universitas Negeri Yogyakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/anggit_review.jpg',
      description:
        'aaa cakep bangeeettt.makasiii. servicenya bagus banget pulaaa. Worth banget pokoknya. dah wajib jadi rekomendasi nih',
    },
  ];
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          What they said
        </h2>

        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'
            >
              <div className='flex items-center gap-4'>
                <img
                  alt={review.name}
                  src={review.imageUrl}
                  className='h-14 w-14 rounded-full object-cover'
                />
                <div>
                  <p className='mt-0.5 text-sm font-medium text-gray-900'>
                    {review.name}
                  </p>
                  <span className='mt-0.5 text-xs font-medium text-gray-800'>
                    {review.campuss}
                  </span>
                </div>
              </div>

              <p className='mt-4 text-xs text-gray-700'>{review.description}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
