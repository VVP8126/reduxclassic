import { ADD_CUSTOMER, REMOVE_CUSTOMER } from './../../utils/constants.js';

const defaultCustomersStore = {
    customers: [
        {id:1, value:"Some value 1"}, {id:2, value:"Some value 2"}, {id:3, value:"Some value 3"}
    ]
}

const customerReducer = (state = defaultCustomersStore, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, 
                     customers: [...state.customers, { 
                        id: state.customers.length > 0 ? (state.customers[state.customers.length-1]).id + 1 : 1, 
                        value: action.payload}]
            };
        case REMOVE_CUSTOMER:
            return { ...state,
                     customers: state.customers.filter(
                        c => 
                        action.payload !== c.id)
            };
        default:
            return state;
    }
}
export default customerReducer;
