import { combineReducers } from 'redux';

import numberReducer from "./numberReducer";

const rootReducer = combineReducers({
    numbers: numberReducer
});

export default rootReducer;