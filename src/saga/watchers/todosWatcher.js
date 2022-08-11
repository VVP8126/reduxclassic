import { takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS } from '../../utils/constants.js';
import { fetchTodosWorker } from '../workers/workers.js';

export function* todosWatcher() {
    yield takeEvery(FETCH_TODOS, fetchTodosWorker);
}
