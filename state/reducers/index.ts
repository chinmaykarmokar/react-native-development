import { combineReducers } from "redux";

// Import all reducers 
import customerReducers from "./customerReducers";
import deliveryPersonReducers from "./deliveryPersonReducers";

const reducers = combineReducers({
    customers: customerReducers,
    deliveryPersons: deliveryPersonReducers
})

export default reducers;