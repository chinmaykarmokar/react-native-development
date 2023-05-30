import { legacy_createStore as createStore, applyMiddleware } from "redux";

// Import thunk middleware
import thunk from "redux-thunk";

// Import all the reducers
import reducers from "../reducers";

const Store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default Store;