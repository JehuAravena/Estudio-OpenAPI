import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

const addTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, { task });
  return response.data;
};

export { getTasks, addTask };