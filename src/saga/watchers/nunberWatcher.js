import { takeEvery } from 'redux-saga/effects';
import { INCREMENT, DECREMENT } from '../../utils/constants.js';
import { incrementWorker, decrementWorker } from '../workers/workers.js';

// Watcher in saga is a function-generator that 
// calls worker in dependency of action type

export function* nunberWatcher() {
    yield takeEvery(INCREMENT, incrementWorker);
    yield takeEvery(DECREMENT, decrementWorker);
}
