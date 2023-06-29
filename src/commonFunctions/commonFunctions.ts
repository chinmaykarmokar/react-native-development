// Import Axios
import axios from "axios";

// Import actions
import { customerDetails, fullMenu, getCartItems, getUserSpecificOrders } from "../../state/actions/customerActions";
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

export const fetchAllCartItems = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/customers/getCartItems", config)
        .then((response) => {
            dispatch(getCartItems(response?.data?.data));
        })
}

export let fetchUserOrders = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/customers/getMyOrders", config)
        .then((response) => {
            try {
                if (response) {
                    console.log("COMMON FUNCTION", response?.data?.data)
                    dispatch(getUserSpecificOrders(response?.data?.data));
                }
            }
            catch (error) {
                throw (error);
            }
        })
}

export const fetchDeliveryPersonDetails = async (dispatch: any, config: Object) => {
    await axios.get("https://burpger-1yxc.onrender.com/api/delivery/deliveryPerson", config)
        .then((response) => {
            dispatch(deliveryPersonDetails(response?.data?.data));
        })
}