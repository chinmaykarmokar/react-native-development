// Import React
import React from "react";

// Import react-native components
import { View } from "react-native";

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import AboutPageComponent from "../components/aboutComponent";
import DeliveryPersonRegisterComponent from "../components/deliveryPersonRegisterComponent";
import DeliveryPersonLoginComponent from "../components/deliveryPersonLoginComponent";
import CustomerRegisterPage from "./customerRegisterPage";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DeliveryPersonRegisterPage = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
						contentStyle: {backgroundColor: "beige"}
					}}
                >
                    <Stack.Screen
                        name = "Delivery Person Register"
                        component = {DeliveryPersonRegisterComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Customer Register"
                        component = {CustomerRegisterPage}
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

export default DeliveryPersonRegisterPage;