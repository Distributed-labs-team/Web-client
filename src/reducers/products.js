import {ADD_PRODUCT, DELETE_PRODUCT, SAVE_PRODUCTS} from "../actions/actions";

const products = (state = [], action) => {
    switch (action.type) {
        case SAVE_PRODUCTS:
            return action.products;
        case ADD_PRODUCT:
            return [...state, action.product];
        case DELETE_PRODUCT:
            return [...state].filter(function( obj ) {
                return obj.id !== action.productId;
            });
        default:
            return state
    }
};

export default products