import axios from 'axios';

const Instance = axios.create({
    baseURL:"http://localhost:8080/tasks"
});

export default Instance;