import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTaskModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Low',
    dueDate: ''
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    dispatch(addTask({ ...taskData, id: uuidv4() }));
    setIsOpen(false);
    setTaskData({ title: '', description: '', priority: 'Low', dueDate: '' });
  };

  return (
    <div>
    
      <button
        className="bg-violet-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition-all"
        onClick={() => setIsOpen(true)}
      >
        Add Task
      </button>

   
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Add New Task</h2>

           
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              placeholder="Task Title"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

          
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
              placeholder="Task Description"
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

          
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                name="priority"
                value={taskData.priority}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

        
            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleInputChange}
              placeholder='enter date'
              className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

          
            <div className="flex justify-between mt-6">
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-
                600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition-all"
                onClick={handleAddTask}
              >
                Add Task
              </button>
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 transition-all mb-6 mt-8"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaskModal;
