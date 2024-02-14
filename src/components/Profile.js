import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page or any other desired page
    window.location.href = '/login'; 
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <div className="w-1/2 bg-gray-200 p-8 rounded-lg">
          <h1 className="text-2xl mb-4">Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
