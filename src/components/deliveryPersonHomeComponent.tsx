// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import React Native components
import { Alert, ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import Laoder
import Loader from "./loaderComponent";

// Import React Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import actions
import { completeOrder } from "../../state/actions/deliveryPersonActions";

// Import common functions
import { fetchDeliveryPersonDetails } from "../commonFunctions/commonFunctions";

// Import Axios
import axios from "axios";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicon from "react-native-vector-icons/Ionicons";

const DeliveryPersonHomeComponent = ({navigation}: any) => {
    const [token, setToken] = useState("");
    const getDeliveryPerson = useSelector((state: any) => {return state?.deliveryPersons?.deliveryPersonData});

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("deliveryPersonToken");
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
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json"
        }
    }

    useEffect(() => {
        fetchDeliveryPersonDetails(dispatch, config);
    })

    const completeDeliveryHandler = async () => {
        const completeOrderUpdatePayload = {
            status: "available",
            items_to_be_delivered: " ",
            delivery_address: " ",
            order_id: 0
        }

        await axios.post("https://burpger-1yxc.onrender.com/api/delivery/orderCompletion", completeOrderUpdatePayload, config)
            .then((response) => {
                if (!response?.data?.error) {
                    Alert.alert("Completed!", "Order was completed successfully!", [
                        {
                            text: "Cancel",
                            onPress: () => {console.log("Cancel Pressed")},
                            style: "cancel"
                        },
                        {
                            text: "OK",
                            onPress: () => {console.log("OK Pressed")}
                        }
                    ])

                    setTimeout(() => {
                        navigation.navigate("Delivery Person Home Tabs")
                    },1000);

                    dispatch(completeOrder(response?.data));
                }
                else {
                    Alert.alert(":(", "Order could not be completed...", [
                        {
                            text: "Cancel",
                            onPress: () => {console.log("Cancel Pressed")},
                            style: "cancel"
                        },
                        {
                            text: "OK",
                            onPress: () => {console.log("OK Pressed")}
                        }
                    ])
                }
            })
    }

    return (
        <>
            {
                (!getDeliveryPerson || getDeliveryPerson == undefined) ? 
                    <Loader/>
                :
                    <ScrollView>
                        <View style = {styles.ordersAssignedHeader}>
                            <Text style = {styles.ordersAssignedText}>
                                <Icon name = "check-circle" size = {35}/> Orders Assigned
                            </Text>
                        </View>
                        {
                            getDeliveryPerson?.map((singleOrderDetails: any, i: number) => {
                                return ( 
                                    <View style = {styles.orderAssignedCard} key = {i}>
                                        <View style = {styles.singleOrderDetail}>
                                            <Text style = {styles.iconLabel}>
                                                <Icon name = "ticket-alt" size = {23}/> 
                                            </Text>
                                            <Text style = {styles.singleorderDetailText}>
                                                Order Number: {singleOrderDetails?.order_id}
                                            </Text>
                                        </View>
                                        <View style = {styles.singleOrderDetail}>
                                            <Text style = {styles.iconLabel}>
                                                <Ionicon name = "location-sharp" size = {23}/>
                                            </Text>
                                            <Text style = {styles.singleorderDetailText}>
                                                Address: {singleOrderDetails?.delivery_address}
                                            </Text>
                                        </View>
                                        <View style = {styles.singleOrderDetail}>
                                            <Pressable 
                                                style = {styles.completeOrderButton}
                                                onPress = {() => {completeDeliveryHandler()}}
                                            >
                                                <Text style = {styles.completeOrderButtonText}>
                                                    <Icon name = "check-circle" size = {16}/> Complete Order
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </View>    
                                )
                            })
                        }
                    </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    ordersAssignedHeader: {
        padding: 25
    },
    ordersAssignedText: {
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 40,
        color: "#000033"
    },
    orderAssignedCard: {
        backgroundColor: "beige",
        elevation: 10,
        margin: 12.5,
        padding: 12,
        borderRadius: 20,
        height: "auto"
    },
    singleOrderDetail: {
        flexDirection: "row",
        padding: 5
    },
    iconLabel: {
        color: "#000"
    },
    singleorderDetailText: {
        marginLeft: 5,
        fontFamily: "PatuaOne-Regular",
        color: "#000",
        fontSize: 21
    },
    completeOrderButton: {
        padding: 12,
        backgroundColor: "#ff8c00",
        borderRadius: 20,
        elevation: 10
    },
    completeOrderButtonText: {
        color: "#000",
        fontFamily: "PatuaOne-Regular",
        fontSize: 16
    }
})

export default DeliveryPersonHomeComponent;