export let getUserSpecificOrders = (data: any) => {
    return {
        type: "getUserSpecificOrders",
        payload: data
    }
}