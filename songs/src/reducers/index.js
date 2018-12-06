import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'No Feelings', duration: '3:15'},
        {title: 'Negative Creep', duration: '2:05'}
    ];
};

const selectedSongReducer = (selecedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selecedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});