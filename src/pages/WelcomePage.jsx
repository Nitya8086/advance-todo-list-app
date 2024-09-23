import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/home'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="path/to/your/welcome-image.png" 
        alt="Welcome"
        className="w-64 md:w-96 lg:w-1/2 mb-6"
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to the Advanced To-Do List</h1>
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomePage;
