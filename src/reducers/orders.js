import {ADD_ORDER, SAVE_ORDERS} from "../actions/actions";

const orders = (state = [], action) => {
    switch (action.type) {
        case SAVE_ORDERS:
            return action.orders;
        case ADD_ORDER:
            return [...state, action.order];
        default:
            return state
    }
};

export default orders