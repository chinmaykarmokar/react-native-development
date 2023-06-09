import React from "react";

// Import components
import CustomerHomeComponent from "../components/customerHomeComponent";
import CartComponent from "../components/cartComponent";
import OrdersComponent from "../components/ordersComponent";

// Import Tab Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

const CustomerHomePage = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Tab.Navigator
                    screenOptions = {({route}) => ({
                        tabBarIcon: ({focused, size, color}) => {
                            let iconName: any;

                            if (route.name === "Customer Home") {
                                iconName = "home"
                                size = focused ? 30 : 25
                            }
                            else if (route.name === "Cart Page") {
                                iconName = "shopping-cart"
                                size = focused ? 30 : 25
                            }
                            else if (route.name === "Orders Page") {
                                iconName = "check-circle"
                                size = focused ? 30 : 25
                            }

                            return <Icon name = {iconName} size = {size}/>
                        }
                    })}
                    sceneContainerStyle = {{
                        backgroundColor: "beige"
                    }}
                   
                >
                    <Tab.Screen
                        name = "Customer Home"
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
                            tabBarLabel: () => null
                        }}
                    />
                    <Tab.Screen
                        name = "Orders Page"
                        component = {OrdersComponent}
                        options = {{
                            header: () => null,
                            tabBarLabel: () => null
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default CustomerHomePage;