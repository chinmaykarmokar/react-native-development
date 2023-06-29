// Import React
import React from "react";

// Import components
import DeliveryPersonHomeComponent from "../components/deliveryPersonHomeComponent";
import DeliveryPersonProfile from "../components/deliveryPersonProfile";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

const DeliveryPersonTabs = () => {
    return (
        <>
            <Tabs.Navigator
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName: any;

                        if (route.name === "Delivery Person Home Tabs") {
                            iconName = "home"
                            size = focused ? 30 : 25
                            color = focused ? "#000099" : "#000"
                        }
                        else if (route.name === "Delivery Person Profile") {
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
                <Tabs.Screen
                    name = "Delivery Person Home Tabs"
                    component = {DeliveryPersonHomeComponent}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null,
                        unmountOnBlur: true
                    }}
                />
                <Tabs.Screen
                    name = "Delivery Person Profile"
                    component  = {DeliveryPersonProfile}
                    options = {{
                        header: () => null,
                        tabBarLabel: () => null
                    }}
                />
            </Tabs.Navigator>
        </>
    )
}

export default DeliveryPersonTabs;