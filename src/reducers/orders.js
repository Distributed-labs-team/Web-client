import {SAVE_PRODUCTS} from "../actions/actions";

const products = (state = [], action) => {
    switch (action.type) {
        case SAVE_PRODUCTS:
            return action.products;
        default:
            return state
    }
};

export default products