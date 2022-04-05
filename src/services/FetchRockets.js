import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  headers: {
    'Content-type': 'application/json',
  },
});

const getRockets = () => api.get('/rockets');

export default getRockets;