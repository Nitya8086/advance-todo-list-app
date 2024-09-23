import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import FilterOptions from './FilterOptions';
import { selectFilteredTasks } from '../features/tasks/taskSelectors';

const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <FilterOptions />
      <div className="mt-6 space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available.</p>
        ) : (
          tasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
