import {createLoadAlbumsAction} from './../store/creators/albumActionCreator.js';

// redux-thunk let use dispatch inside of some function
export const downloadAlbums = () => {
    return function(dispatch) {
        fetch('http://jsonplaceholder.typicode.com/albums?_limit=10')
            .then(response => response.json())
            .then(json => dispatch(createLoadAlbumsAction(json)) )
    }
}