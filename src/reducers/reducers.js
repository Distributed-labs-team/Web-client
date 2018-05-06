import {combineReducers} from "redux";
import {TEST} from "../actions/actions";

function testReducer(state = [], action) {
    switch (action.type) {
        case TEST:
            return state;
        default:
            return state
    }
}

//todo: create reducers


export default combineReducers({
    testReducer
});