import Slider from 'react-slick';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Rahma',
      campuss: 'Universitas Diponegoro',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/rahma.jpg',
      description:
        'Aku puas banget huhuhu di jasa fotografer Naratama ini. Dari kakak sebagai admin fast respon dan sangat membantu. Trs fg nya bener bener bantuin dari awal sampai akhir selama sesi foto fotonyaaa. Buat pengiriman foto nya baik yg asli sama edit juga cepet. Aku puas banget kak. Makasih ya kak💖',
    },
    {
      name: 'Sharron',
      campuss: 'Universitas Gadjah Mada',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syaron.jpg',
      description:
        'KAKK aku udah cekk, bagus bagus banget semuanyaaa😍😍❤️ makasih banyak ya kaak editannya jos bangett',
    },
    {
      name: 'Vita',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/vita_review.jpg',
      campuss: 'Universitas Islam Sultan Agung',
      description:
        'gemes banget liat hasilnya. mana ngga pasaran, ngga monoton kaya yang lain. masih bingung milih yang diedit mana, orinya aja udah bagus. fgnya baik banget, bisa mencairkan suasana yang badmood. jadi  pengen wisuda lagi.',
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
        'aaa cakep bangeeettt. makasiii. servicenya bagus banget pulaaa. Worth banget pokoknya. dah wajib jadi rekomendasi nih',
    },
    {
      name: 'Syifa',
      campuss: 'UIN Saifudin Zuhri',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'Masya Allah,  jepretannya jg kerenn bgttt kakk aku puas dan sukakk sekali, blm di edit aja dh baguss🥰',
    },
    // {
    //   name: 'Faza',
    //   campuss: 'Binus University',
    //   imageUrl:
    //     'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
    //   description: '',
    // },
    {
      name: 'Viona',
      campuss: 'Universitas Islam Sultan Agung',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'Kaak, terima kasih ya kak untuk Naratama dan tim buat sesi tadi pagi!🫰🏻 super seruuuu diarahinnn juga n zuper sabarr 🫶🥹',
    },
    {
      name: 'Sabrina',
      campuss: 'Universitas Negeri Yogyakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'worth the wait keren keren banget tonenya sama beberapa yg bocor bisa ilang omg sukakkkk terima kasih kak 😍💘',
    },
    {
      name: 'Rhema',
      campuss: 'Universitas Multimedia Nusantara',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'kakaak, makasih ya aku suka bgt sm videonya🥹🤍 footage sama editan nya keren',
    },
    {
      name: 'Erlin',
      campuss: 'UIN Surakarta',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'bagus bangettt kak😭 aku puas sama hasilnya, makasihhh ya kak udah mengabadikan momen wisudaku jadi berkesan🙏🏻🥹',
    },
    {
      name: 'Bintang',
      campuss: 'Universitas Islam 45',
      imageUrl:
        'https://xostirwdchxiskxberwl.supabase.co/storage/v1/object/public/naratama/syifa.jpg',
      description:
        'halo kak, makasih banyak yaa kak aku suka banget sama hasilnya bagus-bagus banget!✨🩷',
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    arrows: false,
  };

  const settingsHp = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.25,
    arrows: false,
  };
  return (
    <section className='bg-white'>
      <div className='lg:mx-16 lg:py-16'>
        <h2
          data-aos='fade-right'
          className='text-center text-2xl font-sequel-sans-md lg:text-5xl m-8 font-semibold tracking-tight text-gray-900'
        >
          What they said
        </h2>
        <div className='mt-14 hidden lg:block'>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className='bg-black px-12 py-8 shadow-sm max-w-md h-64'
              >
                <div className='flex items-center gap-4'>
                  {/* <img
                    alt={review.name}
                    src={review.imageUrl}
                    className='h-14 w-14 rounded-full object-cover'
                  /> */}
                  <div>
                    <p className='mt-0.5 text-[16px] font-bold text-white font-sequel-sans-md tracking-2'>
                      {review.name}
                    </p>
                    <span className='mt-0.5 text-[14px] text-xs font-medium text-white font-sequel-sans-md tracking-2'>
                      {review.campuss}
                    </span>
                  </div>
                </div>
                <p className='mt-4 text-[14px] text-white font-sequel-sans-ld tracking-2'>
                  {review.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
        <div className='my-8 mx-4 lg:hidden'>
          <Slider {...settingsHp}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className='bg-black lg:p-12 p-4 shadow-sm max-w-[17rem] h-64'
              >
                <div className='flex items-center gap-4'>
                  {/* <img
                    alt={review.name}
                    src={review.imageUrl}
                    className='h-10 w-10 rounded-full object-cover'
                  /> */}
                  <div>
                    <p className='mt-0.5 text-sm font-medium text-white font-sequel-sans-md'>
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
