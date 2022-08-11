import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT, LOAD_TODOS } from './../../utils/constants.js';

const defaultStore = {
    num: 3,
    todos: []
}

const sagaReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case ADD_NUM:
            return {...state, num: state.num + action.payload};
        case SUB_NUM:
            return {...state, num: state.num - action.payload};
        case INCREMENT:
            return {...state, num: state.num + 1};
        case DECREMENT:
            return {...state, num: state.num - 1};
        case LOAD_TODOS:
            return {...state, todos: action.payload };
        default:
            return state;
    }
}
export default sagaReducer;
