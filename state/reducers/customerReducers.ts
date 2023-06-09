const initialState = {
    customers: [],
    loading: true
}

const customerReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case 'customerRegister': 
            return {
                ... state,
                customerRegisterData: action.payload,
                loading: false
            }

        case "customerLogin": 
            return {
                ... state,
                customerLoginData: action.payload,
                loading: false
            }

        case "customerDetails":
            return {
                ... state,
                customerDetails: action.payload,
                loading: false
            }

        case "fullMenu": 
            return {
                ... state,
                fullMenuDetails: action.payload,
                loading: false
            }
            
        default: 
            return state    
    }
}

export default customerReducers;