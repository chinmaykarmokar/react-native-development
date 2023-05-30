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
            
        default: 
            return state    
    }
}

export default customerReducers;