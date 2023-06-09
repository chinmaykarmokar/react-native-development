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