import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  headers: {
    'Content-type': 'application/json',
  },
});

const getMissions = () => api.get('/missions');

export default getMissions;
