import { createSlice } from '@reduxjs/toolkit';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/localStorageUtils';

const initialState = {
  tasks: loadTasksFromLocalStorage() || [],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setFilter: (state, action) => {
      console.log(action.payload);
      
      state.filter = action.payload;
      
    }
  }
});

export const { addTask, updateTask, deleteTask, setTasks, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
