export let getCartItems = (data: any) => {
    return {
        type: "getCartItems",
        payload: data
    }
}