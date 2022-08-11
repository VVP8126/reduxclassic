import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT, LOAD_TODOS, FETCH_TODOS } from './../../utils/constants.js';

export function createAddAction(payload) {
    return { type:ADD_NUM, payload:payload }
}

export function createSubAction(payload) {
    return { type:SUB_NUM, payload:payload }
}

export function createIncrementAction() {
    return { type:INCREMENT, payload:0 }
}

export function createDecrementAction() {
    return { type:DECREMENT, payload:0 }
}

export function loadTodosAction(payload) {
    return { type:LOAD_TODOS, payload:payload }
}

export function fetchTodosAction() {
    return { type:FETCH_TODOS }
}
