// Old school example. Using of 1 legacy method
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cashReducer     from './reducers/cachReducer.js';
import customerReducer from './reducers/customerReducer.js';
import albumReducer    from './reducers/albumReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Library 'redux-devtools-extension' is using for switching on Redux Devtools
// In our project - see browser GoogleChrome with installed Redux Devtools (see tab Redux)

const rootReducer = combineReducers( {
    cash: cashReducer,
    customer: customerReducer,
    album: albumReducer,
});

// Simple store - no support for async functions
// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // applyMiddleware(thunk) - adds support of async

export default store;
