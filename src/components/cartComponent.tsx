// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import common functions
import { fetchCustomerDetails } from "../commonFunctions/commonFunctions";
import { fetchAllCartItemsAndOrders } from "../commonFunctions/commonFunctions";

// Import React Native components
import { Alert, ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import actions
import { increaseCartItems, decreaseCartItems, placeOrder } from "../../state/actions/customerActions";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import Axios
import axios from "axios";

// Import Loader
import Loader from "./loaderComponent";

const CartComponent = ({navigation}: any) => {
    const [token, setToken] = useState("");
    const customerData = useSelector((state: any) => {return state?.customers?.customerDetails});
    const allCartItemDetails = useSelector((state: any) => {return state?.customers?.userCartAndOrders?.cart});
    const x = useSelector((state: any) => {return state?.customers});

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken')
            if(value !== null) {
                setToken(value);
            }
        } 
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    },[])

    const config = {
        headers: {
            "authorization": `Bearer ${token}`,
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*" 
        }
    }

    useEffect(() => {
        fetchCustomerDetails(dispatch, config); 
        fetchAllCartItemsAndOrders(dispatch, config);
    })

    const increaseCartItemsHandler = async (burgerID: number, quantityOfBurger: number, newBurgerPrice: number, oldBurgerPrice: number) => {
        const increaseBurgerQuantityPayload = {
            quantity_of_burger: quantityOfBurger + 1,
            new_burger_price: newBurgerPrice + oldBurgerPrice
        }

        await axios.put(`https://burpger-1yxc.onrender.com/api/customers/updateCartToAdd/${burgerID}`, increaseBurgerQuantityPayload, config)
            .then((response: any) => {
                Alert.alert("Added!", "The selected burger quantity was increased!", [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK', 
                        onPress: () => console.log('OK Pressed')
                    }
                ])

                setTimeout(() => {
                    navigation.navigate("Cart Page");
                }, 1000)

                dispatch(increaseCartItems(response));
            })
    }

    const decreaseCartItemsHandler = async (burgerID: number, quantityOfBurger: number, newBurgerPrice: number, oldBurgerPrice: number) => {
        const decreaseBurgerQuantityPayload = {
            quantity_of_burger: quantityOfBurger - 1,
            new_burger_price: newBurgerPrice - oldBurgerPrice
        }

        await axios.put(`https://burpger-1yxc.onrender.com/api/customers/updateCartToRemove/${burgerID}`, decreaseBurgerQuantityPayload, config)
            .then((response: any) => {
                Alert.alert("Removed!", "The item you selected was reduced by 1.", [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK', 
                        onPress: () => console.log('OK Pressed')
                    }
                ])

                setTimeout(() => {
                    navigation.navigate("Cart Page");
                }, 1000)

                dispatch(decreaseCartItems(response));
            })
    }

    const placeOrderHandler = async () => {
        const foodItemsOnOrder = allCartItemDetails?.map((singleBurger: any) => {
            return (
                singleBurger?.burger_name
            )
        }).toString()

        const priceOfBurgers = allCartItemDetails?.map((singleBurger: any) => {
            return (
                singleBurger?.new_burger_price
            )
        }).reduce((price1: number, pricen: number) => {
            return (
                price1 + pricen
            )
        })

        const address = customerData?.[0]?.address;
        const email = customerData?.[0]?.email;

        const orderDetailsPayload = {
            email: email,
            address: address,
            items: foodItemsOnOrder,
            price: priceOfBurgers
        }

        await axios.post(`https://burpger-1yxc.onrender.com/api/customers/createOrder`, orderDetailsPayload, config)
            .then((response) => {
                if (response) {
                    console.log(response);

                    Alert.alert("Order placed!", "Your order was placed successfully!", [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK', 
                            onPress: () => console.log('OK Pressed')
                        }
                    ])

                    dispatch(placeOrder(response));
                }
                else {
                    Alert.alert(":(", "Order could not be placed!", [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK', 
                            onPress: () => console.log('OK Pressed')
                        }
                    ])
                }
            })
    }

    console.log("CART AND ORDERS", x);

    return (
        <>
            {
                (!allCartItemDetails || allCartItemDetails == "undefined") ? 
                   <Loader/>
                :
                    <ScrollView>
                        <View style = {styles.cartHeader}>
                            <Text style = {styles.cartHeaderText}>
                                <Icon name = "shopping-cart" size = {40}/> Cart
                            </Text>
                        </View>
                        {
                            allCartItemDetails?.map((singleCartItem: any, i: any) => {
                                return (
                                    <View style = {styles.cartCards} key = {i}>
                                        <View style = {styles.cartSingleDetail}>
                                            <Text style = {styles.iconLabel}>
                                                <Ionicons name = "fast-food-outline" size = {25}/>
                                            </Text>
                                            <Text style = {styles.iconDetail}>{singleCartItem?.burger_name}</Text>
                                        </View>
                                        <View style = {styles.cartSingleDetail}>
                                            <Text style = {styles.iconLabel}>
                                                <Ionicons name = "pricetag-outline" size = {25}/>
                                            </Text>
                                            <Text style = {styles.iconDetail}>₹{singleCartItem?.new_burger_price}</Text>
                                        </View>
                                        <View style = {styles.buttonsView}>
                                            <Pressable 
                                                style = {styles.minusButton}
                                                onPress = {
                                                    () => {
                                                        decreaseCartItemsHandler(singleCartItem?.id, singleCartItem?.quantity_of_burger, singleCartItem?.new_burger_price, singleCartItem?.burger_price)  
                                                    }
                                                }
                                            >
                                                <Text style = {styles.buttonTexts}>-</Text>
                                            </Pressable>
                                            <Pressable style = {styles.centerButton}>
                                                <Text style = {styles.buttonTexts}>{singleCartItem?.quantity_of_burger}</Text>
                                            </Pressable>
                                            <Pressable 
                                                style = {styles.plusButton}
                                                onPress = {
                                                    () => {
                                                        increaseCartItemsHandler(singleCartItem?.id, singleCartItem?.quantity_of_burger, singleCartItem?.new_burger_price, singleCartItem?.burger_price)
                                                    }
                                                }
                                            >
                                                <Text style = {styles.buttonTexts}>+</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                )
                            })
                        }
                        <View style = {styles.placeOrderButtonContainer}>
                            <Pressable 
                                style = {styles.placeOrderButton}
                                onPress = {() => {placeOrderHandler()}}
                            >
                                <Text style = {styles.placeOrderButtonText}>
                                    <Icon name = "box" size = {20}/> Place Order
                                </Text>
                            </Pressable>
                        </View>
                    </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    cartHeader: {
        padding: 25
    },
    cartHeaderText: {
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 40,
        color: "#000033"
    },
    cartCards: {
        backgroundColor: "beige",
        height: "auto",
        elevation: 5,
        margin: 12.5,
        borderRadius: 20,
        padding: 15
    },
    cartSingleDetail: {
        flexDirection: "row",
        marginTop: 3
    },
    buttonsView: {
        flexDirection: "row",
        marginTop: 18
    },
    iconLabel: {
        width: 35,
        color: "#000"
    },
    iconDetail: {
        color: "#000",
        fontSize: 22,
        fontFamily: "PatuaOne-Regular"
    },
    minusButton: {
        backgroundColor: "#ff8c00",
        height: 35,
        width: 35,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 10
    },
    plusButton: {
        backgroundColor: "#ff8c00",
        height: 35,
        width: 35,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 10
    },
    centerButton: {
        backgroundColor: "#ff8c00",
        height: 35,
        width: 35,
        elevation: 10
    },
    buttonTexts: {
        color: "#000",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "PatuaOne-Regular"
    },
    placeOrderButtonContainer: {
        padding: 15,
        marginTop: 10
    },
    placeOrderButton: {
        backgroundColor: "#ff8c00",
        padding: 15,
        borderRadius: 50,
        width: 150,
        elevation: 10
    },
    placeOrderButtonText: {
        fontSize: 18,
        color: "#000",
        fontFamily: "PatuaOne-Regular"
    }
})

export default CartComponent;