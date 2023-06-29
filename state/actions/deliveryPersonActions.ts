export const deliveryPersonRegister = (data: any) => {
    return {
        type: "deliveryPersonRegister",
        payload: data
    }
}

export const deliveryPersonLogin = (data: any) => {
    return {
        type: "deliveryPersonLogin",
        payload: data
    }
}

export const deliveryPersonDetails = (data: any) => {
    return {
        type: "deliveryPersonDetails",
        payload: data
    }
}

export const completeOrder = (data: any) => {
    return {
        type: "assignedOrder",
        payload: data
    }
}