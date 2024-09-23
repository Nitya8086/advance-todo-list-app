import { createSelector } from '@reduxjs/toolkit';

const selectTasks = (state) => state.tasks.tasks;
const selectFilter = (state) => state.tasks.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    const now = new Date();
    switch (filter) {
      case 'low':
        return tasks.filter(task => task.priority === 'Low');
      case 'medium':
        return tasks.filter(task => task.priority === 'Medium');
      case 'high':
        return tasks.filter(task => task.priority === 'High');
      case 'dueSoon':
        return tasks.filter(task => {
          const dueDate = new Date(task.dueDate);
          return (dueDate - now) >= 0 && (dueDate - now) < 3 * 24 * 60 * 60 * 1000; // Due within the next 3 days
        });
      case 'completed':
        return tasks.filter(task => task.completed === true);
      default:
        return tasks;
    }
  }
);
