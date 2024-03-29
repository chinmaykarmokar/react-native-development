import React, { useState, useEffect } from "react";

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import CustomerHomeComponent from "../components/customerHomeComponent";
import CartComponent from "../components/cartComponent";
import OrdersComponent from "../components/ordersComponent";
import CustomerProfilePageComponent from "../components/customerProfileComponent";
import OrdersStack from "./ordersStack";

// Import Tab Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomerTabsPage = () => {
    const [token, setToken] = useState("");

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

    return (
        <>
            <Tab.Navigator
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName: any;

                        if (route.name === "Customer Home Page") {
                            iconName = "home"
                            size = focused ? 30 : 25
                            color = focused ? "#000099" : "#000"
                        }
                        else if (route.name === "Cart Page") {
                            iconName = "shopping-cart"
                            size = focused ? 30 : 25
                            color = focused ? "#000099" : "#000"
                        }
                        else if (route.name === "Orders Page") {
                            iconName = "check-circle"
                            size = focused ? 30 : 25
                            color = focused ? "#000099" : "#000"
                        }
                        else if (route.name === "Customer Profile") {
                            iconName = "user"
                            size = focused ? 30 : 25
                            color = focused ? "#000099" : "#000"
                        }

                        return <Icon name = {iconName} size = {size} color = {color}/>
                    },
                    tabBarActiveTintColor: "blue",
                    tabBarStyle: {
                        backgroundColor: "beige",
                        color: "#000"
                    }
                })}
                sceneContainerStyle = {{
                    backgroundColor: "beige"
                }}
            >
                <Tab.Screen
                    name = "Customer Home Page"
                    component = {CustomerHomeComponent}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null
                    }}
                />
                <Tab.Screen
                    name = "Cart Page"
                    component = {CartComponent}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null,
                        unmountOnBlur: true
                    }}
                />
                <Tab.Screen
                    name = "Orders Page"
                    component = {OrdersComponent}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null,
                        unmountOnBlur: true
                    }}
                />
                <Tab.Screen
                    name = "Customer Profile"
                    component = {CustomerProfilePageComponent}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default CustomerTabsPage;