import React from "react";

// Import components
import CustomerHomeComponent from "../components/customerHomeComponent";
import CartComponent from "../components/cartComponent";
import OrdersComponent from "../components/ordersComponent";

// Import Tab Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const CustomerHomePage = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Tab.Navigator>
                    <Tab.Screen
                        name = "Customer Home"
                        component = {CustomerHomeComponent}
                    />
                    <Tab.Screen
                        name = "Cart Page"
                        component = {CartComponent}
                    />
                    <Tab.Screen
                        name = "Orders Page"
                        component = {OrdersComponent}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default CustomerHomePage;