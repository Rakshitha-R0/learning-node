import React, { useState, useEffect } from 'react';
import Create from './Create.jsx';
import List from './List.jsx';
import axios from '../axios/axios';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server
  const fetchTasks = async () => {
    const response = await axios.get('/');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle task creation
  const handleCreate = async (task) => {
    await axios.post('/', { task });
    fetchTasks();
  };

  // Handle task deletion
  const handleDelete = async (taskId) => {
    await axios.delete(`/${taskId}`);
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <Create onCreate={handleCreate} />
      <List tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default Home;