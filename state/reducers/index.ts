import { combineReducers } from "redux";

// Import all reducers 
import customerReducers from "./customerReducers";
import deliveryPersonReducers from "./deliveryPersonReducers";
import orderReducers from "./orderReducers";
import cartReducers from "./cartReducers";

let reducers = combineReducers({
    customers: customerReducers,
    deliveryPersons: deliveryPersonReducers,
    carts: cartReducers
})

export default reducers;