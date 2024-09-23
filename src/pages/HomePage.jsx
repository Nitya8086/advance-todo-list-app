import React from 'react';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import { useWebSocket } from '../hooks/useWebSocket';

const HomePage = () => {
  useWebSocket();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <AddTaskModal />
        </div>
        <TaskList />
      </div>
    </div>
  );
};

export default HomePage;
