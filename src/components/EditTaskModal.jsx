import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/taskSlice';

const EditTaskModal = ({ task, closeModal }) => {
  const [taskData, setTaskData] = useState(task);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setTaskData({ ...taskData, completed: e.target.checked });
  };

  const handleUpdateTask = () => {
    dispatch(updateTask(taskData));
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Task</h2>
        
        <input
          type="text"
          name="title"
          value={taskData.title}
          onChange={handleInputChange}
          placeholder="Task Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleInputChange}
          placeholder="Task Description"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <select
          name="priority"
          value={taskData.priority}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
        <input
          type="date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={taskData.completed}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="text-gray-700">Completed</label>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
            onClick={handleUpdateTask}
          >
            Update Task
          </button>
          
          <button
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
