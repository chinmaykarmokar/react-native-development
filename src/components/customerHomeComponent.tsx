// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import React Native Components
import { ScrollView, View, Image, Pressable, Text, StyleSheet } from "react-native";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import common functions
import { fetchCustomerDetails, fetchFullMenu } from "../commonFunctions/commonFunctions";

// Use static images
const burpgerHomeImage = require("../../assets/images/burpger-home.png");

// Import react native vector icons
import Icon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const CustomerHomeComponent: React.FC = () => {
    const [token, setToken] = useState("");
    const dispatch = useDispatch();

    const customerData = useSelector((state: any) => {return state?.customers?.customerDetails}); 
    const fullMenuData = useSelector((state: any) => {return state?.customers?.fullMenuDetails});

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
            "authorization": `Bearer ${token}` 
        }
    }

    useEffect(() => {
        fetchCustomerDetails(dispatch, config);
        fetchFullMenu(dispatch, config);
    })

    console.log("MENU", fullMenuData);

    return (
        <>
            {
                (!customerData || !fullMenuData || customerData == "undefined" || fullMenuData == "undefined") 
                ? 
                    <>
                        <Text>Loading....</Text>
                    </>
                :
                    <ScrollView>
                        <View style = {styles.customerHeader}>
                            <Text style = {styles.customerHeaderText}>
                                <FontAwesome5Icon name = "hamburger" size = {40}/> | {customerData?.[0]?.firstname}
                            </Text>
                            <Pressable style = {styles.logOutButton}>
                                <Text style = {styles.logOutText}>
                                    <AntIcon name = "logout" size = {16}/> Log Out
                                </Text>
                            </Pressable>
                        </View>
                        {
                            fullMenuData?.map((singleMenuItem: any, i: any) => {
                                return (
                                    <View style = {styles.menuCard} key = {i}>
                                        <View style = {styles.menuImageView}>
                                            <Image source = {{uri: singleMenuItem?.burger_image}} style = {styles.menuImageStyle}/>
                                        </View>
                                        <View style = {styles.menuDetails}>
                                            <Text style = {styles.burgerName}>{singleMenuItem?.burger_name}</Text>
                                            <Text style = {styles.burgerPrice}>
                                                <Icon name = "pricetag" size = {20}/> ₹ {singleMenuItem?.price}
                                            </Text>
                                            <Text style = {styles.burgerCategory}>
                                                <Icon name = "fast-food-outline" size = {20}/> {singleMenuItem?.category}
                                            </Text>
                                            <Pressable style = {styles.addToCartButton}>
                                                <Text style = {styles.addToCartText}>
                                                    <AntIcon name = "shoppingcart" size = {15}/> Add To Cart
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
    customerHeader: {
        padding: 25,
        // alignItems: "center"
    },
    customerHeaderText: {
        fontFamily: "SecularOne-Regular",
        fontSize: 40,
        color: "#000099",
        // textAlign: "center"
    },
    logOutButton: {
        backgroundColor: "#000",
        width: 100,
        padding: 10,
        borderRadius: 20,
        marginTop: 10
    },
    logOutText: {
        color: "#ff8c00",
        fontFamily: "PatuaOne-Regular",
        fontSize: 16
    },
    menuCard: {
        height: 140,
        backgroundColor: "beige",
        flex: 1,
        flexDirection: "row",
        elevation: 10,
        margin: 12.5,
        borderRadius: 20
    },
    menuImageView: {
        marginLeft: 5,
        marginTop: 5
    },
    menuImageStyle: {
        height: 130,
        width: 130,
        borderRadius: 20
    },
    menuDetails: {
        marginLeft: 10,
        marginTop: 5,
        width: 180
    },
    burgerName: {
        color: "#000",
        fontFamily: "PatuaOne-Regular",
        fontSize: 16
    },
    burgerPrice: {
        color: "#000",
        fontFamily: "PatuaOne-Regular",
        fontSize: 20
    },
    burgerCategory: {
        color: "#000",
        fontFamily: "PatuaOne-Regular",
        fontSize: 16
    },
    addToCartButton: {
        backgroundColor: "#ff8c00",
        marginTop: 10,
        padding: 6,
        borderRadius: 20,
        width: 110
    },
    addToCartText: {
        fontSize: 15,
        fontFamily: "PatuaOne-Regular",
        color: "#000"
    }
})

export default CustomerHomeComponent;