import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profilePic: '',
    password: '',
    address: '',
    planType: '',
    startDate: '',
  });


  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Assuming profilePic is a file input
    });

    // Display the selected file name
    setSelectedFileName(files[0] ? files[0].name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithFile = new FormData();
      for (const key in formData) {
        formDataWithFile.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:4000/api/v1/user/signUp', formDataWithFile);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
  
    <div >
        <h2 className='text-5xl text-green-600 m-6 font-bold mb-6 text-gray-800'>Sign Up</h2>

        <div className='w-full h-full flex items-center justify-center mb-28'>
        <div className='m-6 rounded-3xl' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/green-watercolor-background-with-stain-watercolor_900101-24012.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
        <form className='max-w-md w-full bg-white bg-opacity-50 rounded-3xl p-8 shadow-2xl backdrop-blur-lg' onSubmit={handleSubmit}>





          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className='block text-gray-700 text-lg font-bold mb-2'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border border-gray-400 focus:border-gray-900  rounded-3xl px-3"
              required
            />
          </div>

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

          {/* PhoneNumber */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className='block text-gray-700 text-lg font-bold mb-2'>Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border border-gray-400 focus:border-gray-900  rounded-3xl px-3"
              required
            />
          </div>

          {/* Profile Picture (File Input) */}
          <div className="mb-4 flex items-center">
        <label htmlFor="profilePic" className='block text-gray-700 text-lg font-bold mb-2 mr-10'>Profile Image</label>
        <label htmlFor="profilePic" className="w-1/2 h-12 flex items-center justify-center bg-green-500 text-white rounded-3xl cursor-pointer">
          <span>{selectedFileName || 'Choose File'}</span>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            required
          />
        </label>
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

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className='block text-gray-700 text-lg font-bold mb-2'>Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full h-12 bg-transparent border border-gray-400 focus:border-gray-900  rounded-3xl px-3"
              required
            ></textarea>
          </div>

           {/* Plan Type (Radio Buttons) */}
           <div className="mb-4">
  <label className='block text-gray-700 text-lg font-bold mb-2'>Plan Type</label>
  <div>
    <label className="inline-flex items-center mr-4">
      <input
        type="radio"
        name="planType"
        value="lunch"
        checked={formData.planType === "lunch"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-gray-700"
        required
      />
      <span className="ml-2 font-semibold text-gray-800">Lunch</span>
    </label>

    <label className="inline-flex items-center mr-4">
      <input
        type="radio"
        name="planType"
        value="dinner"
        checked={formData.planType === "dinner"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-gray-700"
      />
      <span className="ml-2">Dinner</span>
    </label>

    <label className="inline-flex items-center mr-4">
      <input
        type="radio"
        name="planType"
        value="full day"
        checked={formData.planType === "full day"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-gray-700"
      />
      <span className="ml-2 font-semibold text-gray-800">Full Day</span>
    </label>

    <label className="inline-flex items-center mr-4">
      <input
        type="radio"
        name="planType"
        value="healthy lunch"
        checked={formData.planType === "healthy lunch"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-gray-700"
      />
      <span className="ml-2 font-semibold text-gray-800">Healthy Lunch</span>
    </label>

    <label className="inline-flex items-center">
      <input
        type="radio"
        name="planType"
        value="premium lunch"
        checked={formData.planType === "premium lunch"}
        onChange={handleChange}
        className="form-radio h-5 w-5 text-gray-700"
      />
      <span className="ml-2 font-semibold text-gray-800">Premium Lunch</span>
    </label>
  </div>
</div>


          {/* Start Date */}
          <div className="mb-4 ">
            <label htmlFor="startDate" className='block text-gray-700 text-lg font-bold mb-2'>Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
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
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            {/* Thank You Message */}
            {success && (
              <div className='mt-4 text-green-700 text-center'>
                Thank you for signing up Now Login Using Same Email & Password!
              </div>
            )}

          {/* Already have an account - Login Link */}
          <p className='mt-4 text-gray-600 text-center'>
            Already have an account? <a href='/login' className='text-blue-500'>Login</a>
          </p>
        </form>
      </div>
    </div>
    </div>

  );
}