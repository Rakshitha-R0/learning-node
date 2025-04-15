import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../axios/axios';

const Update = () => {

    const { task_id } = useParams();
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`/${task_id}`);
      setTask(response.data.task);
    };
    fetchTask();
  }, [task_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/${task_id}`, { task });
    navigate('/');
  };

  return (
    <div className="container">
      <form id="update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default Update;