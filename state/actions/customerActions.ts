export let customerRegister = (data: any) => {
    return {
        type: 'customerRegister',
        payload: data
    }
}

export let customerLogin = (data: any) => {
    return {
        type: "customerLogin",
        payload: data
    }
}

export let customerDetails = (data: any) => {
    return {
        type: "customerDetails",
        payload: data
    }
}

export let fullMenu = (data: any) => {
    return {
        type: "fullMenu",
        payload: data
    }
}

export let addToCart = (data: any) => {
    return {
        type: "addToCart",
        payload: data
    }
}

export let getCartItems = (data: any, userPayload: any) => {
    return {
        type: "getCartItems",
        payload: data
    }
}

export let increaseCartItems = (data: any) => {
    return {
        type: "increaseCartItems",
        payload: data
    }
}

export let decreaseCartItems = (data: any) => {
    return {
        type: "decreaseCartItems",
        payload: data
    }
}

export let placeOrder = (data: any) => {
    return {
        type: "placeOrder",
        payload: data
    }
}

export let getUserSpecificOrders = (data: any) => {
    return {
        type: "getUserSpecificOrders",
        payload: data
    }
}

export let getCartItemsAndOrders = (data: any) => {
    return {
        type: "getCartItemsAndOrders",
        payload: data
    }
}