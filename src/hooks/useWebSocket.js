import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../features/tasks/taskSlice'; 
import { connectWebSocket } from '../services/websocketService';

export const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   
    connectWebSocket((newTasks) => {
      dispatch(setTasks(newTasks)); 
    });
  }, [dispatch]);
};
