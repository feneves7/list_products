import axios from 'axios';

const api = axios.create({
    baseURL: "https://protected-springs-45760.herokuapp.com/api"
});

export default api;