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

export const increaseCartItems = (data: any) => {
    return {
        type: "increaseCartItems",
        payload: data
    }
}

export const decreaseCartItems = (data: any) => {
    return {
        type: "decreaseCartItems",
        payload: data
    }
}

export const placeOrder = (data: any) => {
    return {
        type: "placeOrder",
        payload: data
    }
}

export const getUserSpecificOrders = (data: any) => {
    return {
        type: "getUserSpecificOrders",
        payload: data
    }
}