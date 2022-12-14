const defaultStore = {
    cash: 0
}

const cashReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload};
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}
export default cashReducer;
