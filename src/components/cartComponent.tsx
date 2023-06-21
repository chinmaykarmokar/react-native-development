// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import common functions
import { fetchAllCartItems } from "../commonFunctions/commonFunctions";

// Import React Native components
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const CartComponent = () => {
    const [token, setToken] = useState("");
    const allCartItemDetails = useSelector((state: any) => {return state?.customers?.cartItemDetails});

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
        fetchAllCartItems(dispatch, config);
    })

    console.log("CART", allCartItemDetails);

    return (
        <>
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
                                    <Pressable style = {styles.minusButton}>
                                        <Text style = {styles.buttonTexts}>-</Text>
                                    </Pressable>
                                    <Pressable style = {styles.centerButton}>
                                        <Text style = {styles.buttonTexts}>{singleCartItem?.quantity_of_burger}</Text>
                                    </Pressable>
                                    <Pressable style = {styles.plusButton}>
                                        <Text style = {styles.buttonTexts}>+</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
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
        height: 140,
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
    }
})

export default CartComponent;