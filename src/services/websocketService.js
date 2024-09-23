let socket;


export const connectWebSocket = (onMessageCallback) => {
  const websocketUrl = 'ws://localhost:8080'; 
  socket = new WebSocket(websocketUrl);


  socket.onopen = () => {
    console.log('WebSocket connected');
  };


  socket.onmessage = (message) => {
    onMessageCallback(JSON.parse(message.data)); 
  };


  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };


  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
};


export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.error('WebSocket is not open.');
  }
};
