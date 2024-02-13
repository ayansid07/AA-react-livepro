import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });


  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    try {
      // Make API request to check if user exists
      const response = await axios.post('http://localhost:4000/api/v1/user/login', formData);
  
      // Assuming your API returns some kind of success status
      if (response.data) {
        // Set some kind of authentication token or session
        // For example, you can use localStorage or sessionStorage
        localStorage.setItem('token', response.data._id );
        console.log(response.data._id);
        // Set success state to true
        setSuccess(true);
  
        // Redirect to home page
        window.location.href = '/home';
      } else {
        // Handle login failure (optional)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle error (e.g., network error)
      console.error('Error:', error);
    }
  
    setLoading(false);
  };
  


  return (
  
    <div >
        <h2 className='text-5xl text-green-600 m-6 font-bold mb-6 text-gray-800'>Login</h2>

        <div className='w-full h-full flex items-center justify-center mb-28'>
        <div className='m-6 rounded-3xl' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/green-watercolor-background-with-stain-watercolor_900101-24012.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
        <form className='max-w-md w-full bg-white bg-opacity-50 rounded-3xl p-8 shadow-2xl backdrop-blur-lg' onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className='block text-gray-700 text-lg font-bold mb-2'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border border-gray-400 focus:border-gray-900  rounded-3xl px-3"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className='block text-gray-700 text-lg font-bold mb-2'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border border-gray-400 focus:border-gray-900  rounded-3xl px-3"
              required
            />
          </div>

        {/* Submit Button */}
        <button
              type='submit'
              className='bg-green-700 text-white p-2 rounded-3xl w-full hover:bg-green-400 focus:outline-none focus:shadow-outline-blue transition-all duration-300'
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>

            {/* Thank You Message */}
            {success && (
              <div className='mt-4 text-green-700 text-center'>
                Logged In
              </div>
            )}

          {/* Already have an account - Login Link */}
          <p className='mt-4 text-gray-600 text-center'>
            Create an account <a href='/signup' className='text-blue-500'>Signup</a>
          </p>
        </form>
      </div>
    </div>
    </div>

  );
}