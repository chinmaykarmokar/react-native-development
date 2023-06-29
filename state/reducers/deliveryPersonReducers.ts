const initialState = {
    deliveryPersons: [],
    loading: true
}

const deliveryPersonReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case "deliveryPersonRegister":
            return {
                ... state,
                deliveryPersonRegisterData: action.payload,
                loading: false
            }

        case "deliveryPersonLogin":
            return {
                ... state,
                deliveryPersonLoginDetails: action.payload,
                loading: false
            }

        case "deliveryPersonDetails":
            return {
                ... state,
                deliveryPersonData: action.payload,
                loading: false
            }

        case "completeOrder": 
            return {
                ... state,
                completeOrderData: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default deliveryPersonReducers;