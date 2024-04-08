import { useState } from 'react';
import { supabase } from '../utils/supabase';
import { useAuth } from '../stores/AuthStore';
import { Failed, Success } from '../components/global/Toast';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { login } = useAuth();
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail();
  };
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });
    if (error) {
      setFailed(true);
      setMessage(error.message);
    }
    login(data.session.access_token);
    setSuccess(true);
    console.log(data);
    // setTimeout(() => {
    //   navigate('/admin');
    // }, 3000);
  }

  return (
    <>
      <div className='fixed bottom-0 right-4'>
        {success ? (
          <Success message='Login Sukses' />
        ) : failed ? (
          <Failed message={message} />
        ) : null}
      </div>

      <section>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-16'>
          <h1
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 to:text-white'
          >
            Naratama Admin
          </h1>
          <div className='w-full bg-white rounded-lg shadow to:border md:mt-0 sm:max-w-md xl:p-0 to:bg-gray-800 to:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl to:text-white'>
                Sign in to your account
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 to:text-white'
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 to:bg-gray-700 to:border-gray-600 to:placeholder-gray-400 to:text-white to:focus:ring-blue-500 to:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 to:text-white'
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 to:bg-gray-700 to:border-gray-600 to:placeholder-gray-400 to:text-white to:focus:ring-blue-500 to:focus:border-blue-500'
                    required=''
                  />
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-naratama-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center to:bg-primary-600 to:hover:bg-primary-700 to:focus:ring-primary-800'
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
