let initialState: any = {
    cartData: []
}

let cartReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case "getCartItems": 
            // let newArray = initialState.cartData.push(action.payload);
            return {
                ... state,
                cartItemDetails: action.payload
            }

        default: 
            return state
    } 
}

export default cartReducers;