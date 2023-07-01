let initialState: any = {
    customers: [],
    loading: true
}

let customerReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case 'customerRegister': 
            return {
                ... state,
                customerRegisterData: action.payload
            }

        case "customerLogin": 
            return {
                ... state,
                customerLoginData: action.payload
            }

        case "customerDetails":
            return {
                ... state,
                customerDetails: action.payload
            }

        case "fullMenu": 
            return {
                ... state,
                fullMenuDetails: action.payload
            }

        case "addToCart":
            return {
                ... state,
                addToCartData: action.payload
            }

        case "getCartItems":
            // state["cartItemDetails"] = action.payload 

            return {
                ... state,
                cartItemDetails: action.payload,
                // loading: false
            }

        case "increaseCartItems": 
            return {
                ... state,
                increaseItems: action.payload
            }

        case "decreaseCartItems":
            return {
                ... state,
                decreaseItems: action.payload
            }

        case "placeOrder":
            return {
                ... state,
                orderDetails: action.payload
            }

        case "getUserSpecificOrders":
            return {
                ... state,
                userSpecificOrder: action.payload,
                loading: false
            }

        case "getCartItemsAndOrders":
            return {
                ... state,
                userCartAndOrders: action.payload,
                // userOrders: action.ordersDataPayload,
                loading: false
            }
            
        default: 
            return state    
    }
}

export default customerReducers;