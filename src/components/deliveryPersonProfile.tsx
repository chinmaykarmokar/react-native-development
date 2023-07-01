// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import react redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import common functions
import { fetchDeliveryPersonDetails } from "../commonFunctions/commonFunctions";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import react native components
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

// Import Loader
import Loader from "./loaderComponent";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";

const DeliveryPersonProfile = ({navigation}: any) => {
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
                (!getDeliveryPerson || getDeliveryPerson == undefined) ? 
                    <Loader/>
                :
                    <ScrollView>
                        <View style = {styles.profileHeader}>
                            <Text style = {styles.profileHeaderText}>
                                <Icon name = "user" size = {35}/> Profile
                            </Text>
                        </View>
                        {
                            getDeliveryPerson?.map((deliveryPersonDetails: any, i: number) => {
                                return (
                                    <View key = {i}>
                                        <View style = {styles.singleDetailView}>
                                            <View style = {styles.iconView}>
                                                <FeatherIcon name = "user" size = {25} color = "#ff8c00"/>
                                            </View>
                                            <Text style = {styles.singleDetailText}>
                                                {deliveryPersonDetails?.name}
                                            </Text>
                                        </View>
                                        <View style = {styles.singleDetailView}>
                                            <View style = {styles.iconView}>
                                                <FeatherIcon name = "mail" size = {25} color = "#ff8c00"/>
                                            </View>
                                            <Text style = {styles.singleDetailText}>
                                                {deliveryPersonDetails?.email}
                                            </Text>
                                        </View>
                                        <View style = {styles.singleDetailView}>
                                            <View style = {styles.iconView}>
                                                <FeatherIcon name = "phone" size = {25} color = "#ff8c00"/>
                                            </View>
                                            <Text style = {styles.singleDetailText}>
                                                {deliveryPersonDetails?.phone}
                                            </Text>
                                        </View>
                                        <View>
                                            <Pressable 
                                                style = {styles.logOutButtonStyle}
                                                onPress = {logOutHandler}    
                                            >
                                                <Text style = {styles.logOutButtonText}>
                                                    <AntIcon name = "logout" size = {20}/> Logout
                                                    {/* <AntIcon name = "logout" size = {20}/> Log Out */}
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
    profileHeader: {
        padding: 25
    },
    profileHeaderText: {
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 40,
        color: "#000033"
    },
    iconView: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 50
    },
    singleDetailView: {
        flexDirection: "row",
        margin: 15,
        padding: 12,
        height: "auto",
        borderRadius: 20,
        backgroundColor: "beige",
        elevation: 5
    },
    singleDetailText: {
        fontFamily: "PatuaOne-Regular",
        marginLeft: 7,
        color: "#000",
        fontSize: 20
    },
    logOutButtonView: {
        padding: 20
    },
    logOutButtonStyle: {
        backgroundColor: "#ff8c00",
        padding: 10,
        borderRadius: 20,
        elevation: 10,
        width: 120,
        margin: 12
    },
    logOutButtonText: {
        fontFamily: "PatuaOne-Regular",
        color: "#000",
        fontSize: 18,
        width: 80
    }
})

export default DeliveryPersonProfile;