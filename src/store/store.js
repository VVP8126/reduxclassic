// Old school example. Using of 1 legacy method
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cashReducer     from './reducers/cachReducer.js';
import customerReducer from './reducers/customerReducer.js';
import albumReducer    from './reducers/albumReducer.js';
import sagaReducer     from './reducers/sagaReducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // common case - library to use async-functions

import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from './../saga/watchers/rootWatcher.js';

const sagaMiddleware = createSagaMiddleware();

// Library 'redux-devtools-extension' is using for switching on Redux Devtools
// In our project - see browser GoogleChrome with installed Redux Devtools (see tab Redux)

const rootReducer = combineReducers( {
    cash: cashReducer,
    customer: customerReducer,
    album: albumReducer,
    saga: sagaReducer,
});

// Simple store - no support for async functions
// const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));       // applyMiddleware(thunk) - adds support of async
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))); // applyMiddleware(sagaMiddleware) - adds support of async

sagaMiddleware.run(rootWatcher);

export default store;
