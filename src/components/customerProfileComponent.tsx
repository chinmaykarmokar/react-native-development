// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import React Native components
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import common functions
import { fetchCustomerDetails } from "../commonFunctions/commonFunctions";

// Import React-Redux components
import { useSelector, useDispatch } from "react-redux";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import Axios
import axios from "axios";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";

const CustomerProfilePageComponent = ({navigation}: any) => {
    const [token, setToken] = useState("");
    const customerData = useSelector((state: any) => {return state?.customers?.customerDetails});

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken');
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
    })

    const logOutHandler = async () => {
        try {
            await AsyncStorage.clear();

            setTimeout(() => {
                navigation.navigate("Landing Page");
            },2000)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                (!customerData || customerData == "undefined") ?
                    <>
                        <Text>Loading...</Text>
                    </>
                : 
                    <ScrollView>
                        <View style = {styles.brandContainer}>
                            <Text style = {styles.brandName}>
                                <Icon name = "hamburger" size = {30}/> Burpger | Customer
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style = {styles.iconLabel}>
                                <Icon name = "user" size = {22}/> 
                            </Text>
                            <Text style = {styles.singleDetails}>
                                {customerData?.[0]?.firstname}
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style = {styles.iconLabel}>
                                <Icon name = "calendar" size = {22}/> 
                            </Text>
                            <Text style = {styles.singleDetails}>
                                {customerData?.[0]?.age}
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style = {styles.iconLabel}>
                                <Icon name = "mobile-alt" size = {22}/>
                            </Text>
                            <Text style = {styles.singleDetails}>
                                {customerData?.[0]?.mobile}
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style = {styles.iconLabel}>
                                <Icon name = "mail-bulk" size = {22}/> 
                            </Text>
                            <Text style = {styles.singleDetails}>
                                {customerData?.[0]?.email}
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style = {styles.iconLabel}>
                                <Icon name = "address-card" size = {22}/> 
                            </Text>
                            <Text style = {styles.singleDetails}>
                                {customerData?.[0]?.address}
                            </Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Pressable style = {styles.logOutButton} onPress = {logOutHandler}>
                                <Text style = {styles.logOutButtonText}>
                                    <AntIcon name = "logout" size = {22}/> Log Out
                                </Text>
                            </Pressable>
                        </View>  
                    </ScrollView>
            }       
        </>
    )
}

const styles = StyleSheet.create({
    brandContainer: {
        padding: 20,
        alignItems: "center"
    },
    brandName: {
        fontSize: 30,
        color: "#000",
        fontFamily: "FredokaOne-Regular"
    },
    detailsContainer: {
        padding: 15,
        flexDirection: "row"
    },
    iconLabel: {
        backgroundColor: "#000099",
        color: "beige",
        width: 45,
        textAlign: "center",
        borderRadius: 100,
        padding: 5
    },
    singleDetails: {
        fontFamily: "PatuaOne-Regular",
        fontSize: 20,
        color: "#000099",
        marginLeft: 5
    },
    logOutButton: {
        backgroundColor: "#ff8c00",
        width: 120,
        padding: 10,
        borderRadius: 20,
        marginTop: 10,
        elevation: 10
    },
    logOutButtonText: {
        color: "#000",
        fontFamily: "PatuaOne-Regular",
        fontSize: 18
    }
})

export default CustomerProfilePageComponent;