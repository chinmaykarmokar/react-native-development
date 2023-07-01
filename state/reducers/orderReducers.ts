let initialState = {
    orders: []
}

let orderReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case "getUserSpecificOrders": 
            return {
                ... state,
                userSpecificOrder: action.payload
            }

        default: 
            return state
    } 
}

export default orderReducers;