import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [univ, setUniv] = useState('');
  const [mua, setMua] = useState('');
  const [kebaya, setKebaya] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(import.meta.env.VITE_REVIEW_URL, {
        method: 'POST',
        body: JSON.stringify({ rating, review, name, univ, mua, kebaya }),
      });
      navigate('/review-success');
    } catch (error) {
      console.error(error);
    }
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className='max-w-md mx-auto p-6 mt-8'>
      <h1 className='text-2xl font-bold mb-12'>Review & Reference</h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='nama'
            id='nama'
            className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
            placeholder=''
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor='nama'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Name
          </label>
        </div>

        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='university'
            id='university'
            className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
            placeholder=''
            required={true}
            value={univ}
            onChange={(e) => setUniv(e.target.value)}
          />
          <label
            htmlFor='university'
            className='peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            University
          </label>
        </div>

        <div className='pb-[0.5px]'></div>
        <div className='space-y-2'>
          <label className='block font-semibold text-gray-700'>Rating</label>
          <div className='text-sm text-gray-500'>Please rate our service </div>
          <div className='flex gap-2' onMouseLeave={handleStarLeave}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type='button'
                onClick={() => handleStarClick(value)}
                onMouseEnter={() => handleStarHover(value)}
                className='focus:outline-none'
              >
                {/* <Star
                  className={`w-8 h-8 ${
                    (hoveredRating || rating) >= value
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  //   className='size-6 '
                  className={`w-8 h-8 ${
                    (hoveredRating || rating) >= value
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                  />
                </svg>
              </button>
            ))}
          </div>
          <div className='text-sm text-gray-500'>
            {rating > 0 ? `Your rating: ${rating}/5` : ''}
          </div>
        </div>

        <div className='space-y-2'>
          <label htmlFor='review' className='block font-semibold text-gray-700'>
            Your Review
          </label>
          <textarea
            id='review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder='Please share your testimoni'
            className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400'
            rows={4}
          />
        </div>

        <div className='py-4'>
          <div className='border-b'></div>
        </div>

        <div className='text-sm text-gray-500'>
          Please fill the form for our reference
        </div>

        <div className='space-y-2'>
          <label htmlFor='field1' className='block font-semibold text-gray-700'>
            Make up Artist
          </label>
          <input
            id='mua'
            type='text'
            value={mua}
            onChange={(e) => setMua(e.target.value)}
            placeholder='Spill your make up artist'
            className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='field2' className='block font-semibold text-gray-700'>
            Attire
          </label>
          <input
            id='kebaya'
            type='text'
            value={kebaya}
            onChange={(e) => setKebaya(e.target.value)}
            placeholder='Spill your attire brand'
            className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors'
          disabled={
            rating === 0 ||
            !review.trim() ||
            !name.trim() ||
            !univ.trim() ||
            !mua.trim() ||
            !kebaya.trim()
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
