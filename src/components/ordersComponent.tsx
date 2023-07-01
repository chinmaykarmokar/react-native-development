// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import AynscStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import React Native components
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import Loader
import Loader from "./loaderComponent";

// Import React Native Vector Icons
import Icon from "react-native-vector-icons/FontAwesome5"

// Import common functions
import { fetchAllCartItemsAndOrders } from "../commonFunctions/commonFunctions";

// Import react native vector icons
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const OrdersComponent = ({navigation}: any) => {
    const [token, setToken] = useState("");
    const allUserOrders = useSelector((state: any) => {return state?.customers?.userCartAndOrders?.orders});

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
        fetchAllCartItemsAndOrders(dispatch,config);
    })

    console.log(allUserOrders);

    return (
        <>
            {
                (!allUserOrders || allUserOrders == undefined) ? 
                    <Loader/>
                :
                    <ScrollView>
                        <View style = {styles.ordersHeader}>
                            <Text style = {styles.ordersHeaderText}>
                                <Icon name = "box" size = {40}/> Orders
                            </Text>
                        </View>
                        {
                            allUserOrders?.map((singleOrder: any, i: any) => {
                                return (
                                    <View style = {styles.orderCards} key = {i}>
                                        <View style = {styles.singleOrderViewContainer}>
                                            <Text style = {styles.iconLabel}>
                                                <Ionicons name = "fast-food-outline" size = {30}/>
                                            </Text>
                                            <Text style = {styles.singleOrderDetailText}>
                                                {singleOrder?.items}
                                            </Text>
                                        </View>
                                        <View style = {styles.singleOrderViewContainer}>
                                            <Text style = {styles.iconLabel}>
                                                <Ionicons name = "pricetag-outline" size = {30}/>
                                            </Text>
                                            <Text style = {styles.singleOrderPriceDetail}>
                                                ₹ {singleOrder?.price}
                                            </Text>
                                        </View>
                                        <View>
                                            <Pressable style = {styles.statusHighlighter}>
                                                <Text style = {styles.statusIconLabel}>
                                                    <Icon name = "dot-circle" size = {25}/>
                                                </Text>
                                                <Text style = {styles.statusText}>
                                                    {singleOrder?.delivery_status}
                                                </Text>
                                            </Pressable>
                                        </View>                              
                                    </View>
                                )
                            }).reverse()
                        }
                    </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    ordersHeader: {
        padding: 25
    },
    ordersHeaderText: {
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 40,
        color: "#000033"
    },
    orderCards: {
        backgroundColor: "beige",
        height: "auto",
        elevation: 5,
        margin: 12.5,
        borderRadius: 20,
        padding: 15
    },
    singleOrderViewContainer: {
        flexDirection: "row",
        padding: 5
    },
    iconLabel: {
        color: "#000"
    },
    statusIconLabel: {
        color: "#00b300"
    },
    singleOrderDetailText: {
        marginLeft: 6,
        fontFamily: "PatuaOne-Regular",
        width: 310,
        color: "#000",
        fontSize: 18
    },
    singleOrderPriceDetail: {
        marginLeft: 7,
        fontFamily: "PatuaOne-Regular",
        width: 320,
        color: "#000",
        fontSize: 25
    },
    statusHighlighter: {
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 50,
        flexDirection: "row",
        width: 150
    },
    statusText: {
        color: "#00b300",
        fontFamily: "PatuaOne-Regular",
        fontSize: 20,
        marginLeft: 5
    }
})

export default OrdersComponent;