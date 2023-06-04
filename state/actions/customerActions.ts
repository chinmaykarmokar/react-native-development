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