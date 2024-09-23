import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import EditTaskModal from './EditTaskModal';

const Task = ({ task }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <p className="text-gray-500 mb-2">Due Date: {task.dueDate}</p>
      <p className={`text-${task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : 'green'}-600 mb-4`}>
        Priority: {task.priority}
      </p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {isEditModalOpen && <EditTaskModal task={task} closeModal={() => setIsEditModalOpen(false)} />}
    </div>
  );
};

export default Task;
