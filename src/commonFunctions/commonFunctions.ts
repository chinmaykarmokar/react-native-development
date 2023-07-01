// Import Axios
import axios from "axios";

// Import actions
import { customerDetails, fullMenu, getCartItems, getUserSpecificOrders, getCartItemsAndOrders } from "../../state/actions/customerActions";
import { deliveryPersonDetails } from "../../state/actions/deliveryPersonActions";

export const fetchCustomerDetails = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/customers/allCustomers", config)
        .then((response) => {
            dispatch(customerDetails(response?.data?.data));
        })
}

export const fetchFullMenu = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/customers/menu", config)
        .then((response) => {
            dispatch(fullMenu(response?.data?.data));
        })
}

// export let fetchAllCartItems = async (dispatch: any, config: Object) => {
//     await axios.get("https://burpger-1yxc.onrender.com/api/customers/getCartItems", config)
//         .then((response) => {
//             try {
//                 if (response) {
//                     console.log("CART DETAILS", response?.data?.data)
//                     dispatch(getCartItems(response?.data?.data));
//                 }
//             }
//             catch (error) {
//                 throw(error);
//             }
//         })
// }

export let fetchAllCartItemsAndOrders = async (dispatch: any, config: Object) => {
    await axios.all([
        await axios.get("https://burpger-1yxc.onrender.com/api/customers/getCartItems", config),
        await axios.get("https://burpger-1yxc.onrender.com/api/customers/getMyOrders", config)
    ])
    .then(axios.spread((cartResponse: any, orderResponse: any) => {
        try {
            if (cartResponse && orderResponse) {
                console.log(cartResponse);
                console.log(orderResponse);

                const cartAndOrderObject = {
                    cart: cartResponse?.data?.data,
                    orders: orderResponse?.data?.data
                }

                dispatch(getCartItemsAndOrders(cartAndOrderObject));
            }
        }
        catch (error) {
            throw (error);
        }
    }))
}

export let fetchUserOrders = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/customers/getMyOrders", config)
        .then((response) => {
            try {
                if (response) {
                    // console.log("COMMON FUNCTION", response?.data?.data)
                    dispatch(getUserSpecificOrders(response?.data?.data));
                }
            }
            catch (error) {
                throw (error);
            }
        })
}

export let fetchDeliveryPersonDetails = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/delivery/deliveryPerson", config)
        .then((response) => {
            dispatch(deliveryPersonDetails(response?.data?.data));
        })
}