import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 5cc538d1d4bb491f4f501feba4d51ea8a2f9e6daef359b69a3913281d0fe4e84'
    }
});