import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import DoneImage from "./assets/images/Done.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="bg-blue-600 text-white py-6 flex flex-col items-center justify-center space-y-4 sticky top-0">
        <img src={DoneImage} alt="Done" className="w-16 md:w-32 lg:w-48" />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Advanced To-Do List</h1>
      </header>
      <main className="p-6">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
