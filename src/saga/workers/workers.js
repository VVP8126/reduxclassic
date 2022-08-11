import { put, call } from 'redux-saga/effects' // put - some kind of dispatch for async-functions (takes action)
import { createAddAction, createSubAction, createIncrementAction, createDecrementAction, loadTodosAction } from './../../store/creators/sagaExampleActionCreator.js';

// Saga is based on generators (functions with asterisk)
// Workers in saga - functions-generators with async logic

// Esync emulation for arythmetics in this example
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* addNumberWorker(payload) {
    yield delay(1000);                      // create 1 sec delay before run next function
    yield put(createAddAction(payload));    // use put dispatch
}

export function* subNumberWorker(payload) {
    yield delay(1000);
    yield put(createSubAction(payload));
}

export function* incrementWorker() {
    yield delay(1000);
    yield put(createIncrementAction());
}

export function* decrementWorker() {
    yield delay(1000);
    yield put(createDecrementAction());
}

// Work with JSON API
const fetchTodos = () => fetch("http://jsonplaceholder.typicode.com/todos?_limit=7");

export function* fetchTodosWorker() {
    const data = yield call(fetchTodos);
    const json = yield call(
                    () => 
                    new Promise(res => res(data.json())));
    yield put(loadTodosAction(json));
}
