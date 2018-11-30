import axios from 'axios';

const KEY = 'AIzaSyDgHiSjry_gIiZguGnNrR387xCP6NYmmLY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        maxResults: 5,
        key: KEY
    }
});
