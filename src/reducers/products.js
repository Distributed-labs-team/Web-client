import {ADD_PRODUCT, SAVE_PRODUCTS} from "../actions/actions";

const products = (state = [], action) => {
    switch (action.type) {
        case SAVE_PRODUCTS:
            return action.products;
        case ADD_PRODUCT:
            return [...state, action.product];
        default:
            return state
    }
};

export default products