import { LOAD_ALBUMS, REMOVE_ALBUM } from './../../utils/constants.js';

export function createLoadAlbumsAction(data) {
    return { type: LOAD_ALBUMS, payload: data }
}

export function createRemoveAlbumAction(id) {
    return { type: REMOVE_ALBUM, payload: id }
}
