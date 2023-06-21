export const customerRegister = (data: any) => {
    return {
        type: 'customerRegister',
        payload: data
    }
}

export const customerLogin = (data: any) => {
    return {
        type: "customerLogin",
        payload: data
    }
}

export const customerDetails = (data: any) => {
    return {
        type: "customerDetails",
        payload: data
    }
}

export const fullMenu = (data: any) => {
    return {
        type: "fullMenu",
        payload: data
    }
}

export const addToCart = (data: any) => {
    return {
        type: "addToCart",
        payload: data
    }
}

export const getCartItems = (data: any) => {
    return {
        type: "getCartItems",
        payload: data
    }
}