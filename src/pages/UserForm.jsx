import { useState } from 'react';
import { Failed } from '../components/global/Toast';

export const UserForm = () => {
  const [data, setData] = useState({
    nama: '',
    kampus: '',
    paket: '',
    lokasi: '',
    noWa: '',
    instagram: '',
    tanggal: '',
    jam: '',
    how: '',
  });
  const [failed, setFailed] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const rawMessage = `*Booking Form*

Nama: ${data.nama}
Universitas: ${data.kampus}
Paket: ${data.paket}
Tanggal: ${data.tanggal}
Sesi: ${data.jam}`;
    const encodedMessage = encodeURIComponent(rawMessage);
    try {
      await fetch(import.meta.env.VITE_SPREADSHEET_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      window.location.href = `https://wa.me/6285974810349?text=${encodedMessage}`;
      setData(null);
      setLoading(false);
    } catch (error) {
      setFailed(error);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className='fixed bottom-0 right-4'>
        {failed ? <Failed message={failed} /> : null}
      </div>
      <div className='h-screen p-6'>
        <form
          className='max-w-md mx-auto font-gilroy-regular'
          onSubmit={handleSubmit}
        >
          <div className='mb-6 mt-32 w-full'>
            <h1 className='text-xl font-gilroy-bold'>Booking Form</h1>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='nama'
              id='nama'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.nama}
              onChange={handleChange}
            />
            <label
              htmlFor='nama'
              className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='kampus'
              id='kampus'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.kampus}
              onChange={handleChange}
            />
            <label
              htmlFor='kampus'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              University
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <select
              name='paket'
              id='paket'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              required={true}
              value={data?.paket}
              onChange={handleChange}
            >
              <option value='' disabled selected>
                Select Package
              </option>
              {[
                // 'Personal-Lite',
                'Personal-Regular',
                'Personal-Premium',
                'Couple-Regular',
                'Couple-Premium',
                'Group',
                'Video 1',
                'Video 2',
                'Combo 1',
                'Combo 2',
              ].map((paket, index) => (
                <option key={index} value={paket}>
                  {paket}
                </option>
              ))}
            </select>
            <label
              htmlFor='paket'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Package
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='lokasi'
              id='lokasi'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.lokasi}
              onChange={handleChange}
            />
            <label
              htmlFor='lokasi'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Meeting Point
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='phone'
              name='noWa'
              id='noWa'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.noWa}
              onChange={handleChange}
            />
            <label
              htmlFor='noWa'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Whatsapp Number
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='instagram'
              id='instagram'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.instagram}
              onChange={handleChange}
            />
            <label
              htmlFor='instagram'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Instagram
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='date'
              name='tanggal'
              id='date'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder='mm/dd/yyyy'
              required={true}
              value={data?.tanggal}
              onChange={handleChange}
            />
            <label
              htmlFor='date'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Date
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='time'
              name='jam'
              id='jam'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              placeholder=''
              required={true}
              value={data?.jam}
              onChange={handleChange}
            />
            <label
              htmlFor='jam'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Time
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <select
              name='how'
              id='how'
              className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer'
              required={true}
              value={data?.how}
              onChange={handleChange}
            >
              <option value='' disabled selected>
                How you know us?
              </option>
              {[
                'Instagram',
                'Tiktok',
                'Iklan',
                'Rekomendasi teman',
                'Lainnya',
              ].map((how, index) => (
                <option key={index} value={how}>
                  {how}
                </option>
              ))}
            </select>
            <label
              htmlFor='how'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              How you know us?
            </label>
          </div>

          <button
            disabled={loading ? true : false}
            type='submit'
            className={`${
              !loading ? 'bg-black' : 'bg-gray-600'
            } text-white hover:bg-black-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-3 mt-8 text-center`}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
          <h1 className='font-gilroy-regular text-center text-xs mt-4 pb-4'>
            Naratama Graduation
          </h1>
        </form>
      </div>
    </>
  );
};
