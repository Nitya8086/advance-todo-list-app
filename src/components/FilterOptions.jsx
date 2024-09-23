import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';  

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  
  };

  return (
    <div className="w-full flex justify-center mb-4">
      <select
        onChange={handleFilterChange}
        className="w-full max-w-xs p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
      >
        <option value="all">All</option>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
        <option value="dueSoon">Due Soon</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterOptions;
