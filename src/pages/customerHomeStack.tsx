// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import CustomerTabsPage from "./customerHomeTabs";

// Import Tab Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CustomerHomeStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = "Customer Home"
                        component = {CustomerTabsPage}
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
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default CustomerHomeStack;