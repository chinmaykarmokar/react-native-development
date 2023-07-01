// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import DeliveryPersonRegisterComponent from "../components/deliveryPersonRegisterComponent";
import DeliveryPersonLoginComponent from "../components/deliveryPersonLoginComponent";
import CustomerRegisterComponent from "../components/customerRegisterComponent";
import CustomerLoginComponent from "../components/customerLoginComponent";
import CustomerTabsPage from "./customerHomeTabs";
import DeliveryPersonTabs from "./deliveryPersonTabs";
import AboutPageComponent from "../components/aboutComponent";

// Import Tab Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CustomerHomeStack = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
                        contentStyle: {backgroundColor: "beige"}
                    }}
                >
                    <Stack.Screen
                        name = "Customer Home"
                        component = {CustomerTabsPage}
                        options = {{
                            header: () => null
                        }}
                    /> 
                    <Stack.Screen
                        name = "Delivery Person Home"
                        component = {DeliveryPersonTabs}
                        options = {{
                            header: () => null
                        }}
                    />                     
                    <Stack.Screen
                        name = "Landing Page"
                        component = {LandingPageComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Delivery Person Register"
                        component = {DeliveryPersonRegisterComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Delivery Person Login"
                        component = {DeliveryPersonLoginComponent}
                        options = {{
							headerTitleStyle: {
								fontFamily: "PatuaOne-Regular"
							},
							headerStyle: {
								backgroundColor: "beige"
							}
						}}
                    />
                    <Stack.Screen
                        name = "Customer Register"
                        component = {CustomerRegisterComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Customer Login"
                        component = {CustomerLoginComponent}
                        options = {{
							headerTitleStyle: {
								fontFamily: "PatuaOne-Regular"
							},
							headerStyle: {
								backgroundColor: "beige"
							}
						}}
                    />
                    <Stack.Screen
                        name = "About"
                        component = {AboutPageComponent}
                        options = {{
                            headerTitleStyle: {
                                fontFamily: "PatuaOne-Regular"
                            },
                            headerStyle: {
                                backgroundColor: "beige"
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default CustomerHomeStack;