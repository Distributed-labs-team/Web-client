import {combineReducers} from "redux";
import {SAVE_PRODUCTS, TEST} from "../actions/actions";

function testReducer(state = [], action) {
    switch (action.type) {
        case TEST:
            return state;
        default:
            return state
    }
}

function products(state = [], action) {
    switch (action.type) {
        case SAVE_PRODUCTS:
            return action.products;
        default:
            return state
    }
}

//todo: create reducers


export default combineReducers({
    testReducer,
    products,
});