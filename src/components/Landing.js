import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/7b2d7591-5f86-4e1d-af57-fd5fb1add38f.png',
  };

  return (
    
    <>
        <div className='w-full '>
          <div className='w-52 mx-auto' >
            <img src={defaultProps.image} alt="Opening Image goes here"  />
          </div>

          <div className="w-full p-4 mb-20">
            <button
              className="w-full py-3 px-6 text-black rounded-full "
            >
              Pureaty Tiffins is the ultimate solution for your daily meals. Sign up now and enjoy hassle-free tiffin lunches and dinners.
            </button>

            <Link to="/plans">
              <button
                className="w-full py-3 mb-4 px-6 bg-green-500 text-white rounded-full focus:outline-none hover:bg-green-600 transition duration-300"
              >
                Next
              </button>
            </Link>

            <Link to="/about">
              <button
                className="w-full py-3 px-6 bg-gray-50 text-black rounded-full focus:outline-none hover:bg-green-600 transition duration-300"
              >
                Skip
              </button>
            </Link>

            <Link to="/login">
              <div
                className="w-full py-3 px-6 text-black rounded-full mt-10 text-center"
              >
                Already a member <a className='text-green-900' > Login </a> 
              </div>
            </Link>
          </div>
        </div>

    </>
  );
};

export default Landing;
