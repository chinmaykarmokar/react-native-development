// Import Axios
import axios from "axios";
import { useDispatch } from "react-redux";

// Import actions
import { customerDetails, fullMenu } from "../../state/actions/customerActions";

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