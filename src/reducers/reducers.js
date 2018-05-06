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

export default combineReducers({
    testReducer
});