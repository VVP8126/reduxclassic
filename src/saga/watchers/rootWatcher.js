import {all} from 'redux-saga/effects';
import {nunberWatcher} from './nunberWatcher.js';
import {todosWatcher} from './todosWatcher.js';

export function* rootWatcher() {
    yield all([nunberWatcher(), todosWatcher()]);
}
