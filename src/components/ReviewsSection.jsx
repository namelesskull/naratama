import Slider from 'react-slick';

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    arrows: false,
  };

  const settingsHp = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    arrows: false,
  };
  return (
    <section className='bg-white'>
      <div className='lg:mx-24 py-12 lg:py-16'>
        <h2 className='text-center lg:text-2xl text-xl m-8 font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          What they said
        </h2>
        <div className='mt-8 hidden lg:block'>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className='bg-black p-12 shadow-sm max-w-xl h-64'
              >
                <div className='flex items-center gap-4'>
                  <img
                    alt={review.name}
                    src={review.imageUrl}
                    className='h-14 w-14 rounded-full object-cover'
                  />
                  <div>
                    <p className='mt-0.5 text-sm font-medium text-white'>
                      {review.name}
                    </p>
                    <span className='mt-0.5 text-xs font-medium text-white'>
                      {review.campuss}
                    </span>
                  </div>
                </div>
                <p className='mt-4 text-xs text-white'>{review.description}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className='mt-8 lg:hidden'>
          <Slider {...settingsHp}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className='bg-black lg:p-12 p-4 shadow-sm max-w-xs h-52'
              >
                <div className='flex items-center gap-4'>
                  <img
                    alt={review.name}
                    src={review.imageUrl}
                    className='h-14 w-14 rounded-full object-cover'
                  />
                  <div>
                    <p className='mt-0.5 text-sm font-medium text-white'>
                      {review.name}
                    </p>
                    <span className='mt-0.5 text-xs font-medium text-white'>
                      {review.campuss}
                    </span>
                  </div>
                </div>
                <p className='mt-4 text-xs text-white'>{review.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
