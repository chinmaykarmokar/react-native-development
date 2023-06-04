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

        default:
            return state;
    }
}

export default deliveryPersonReducers;