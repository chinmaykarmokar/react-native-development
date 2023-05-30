import { combineReducers } from "redux";

// Import all reducers 
import customerReducers from "./customerReducers";

const reducers = combineReducers({
    customers: customerReducers
})

export default reducers;