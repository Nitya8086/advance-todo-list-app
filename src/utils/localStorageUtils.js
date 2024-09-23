export const loadTasksFromLocalStorage = () => {
  try {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : null;
  } catch (error) {
    console.error('Failed to load tasks:', error);
    return null;
  }
};

export const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks:', error);
  }
};
