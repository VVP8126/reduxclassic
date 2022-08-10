import { LOAD_ALBUMS, REMOVE_ALBUM } from './../../utils/constants.js';

const defaultAlbumStore = {
    albums: [ { id:-1, title:"Fake value" } ]
}

const albumReducer = (state = defaultAlbumStore, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return { ...state, albums: [...state.albums, ...action.payload] };
        case REMOVE_ALBUM:
            return { ...state, albums: state.albums.filter(al => action.payload !== al.id) };
        default:
            return state;
    }
}
export default albumReducer;
