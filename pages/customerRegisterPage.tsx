import React from "react";

// Import react-native components
import { View } from "react-native";

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import AboutPageComponent from "../components/aboutComponent";
import CustomerRegisterComponent from "../components/customerRegisterComponent";
import DeliveryPersonRegisterPage from "./deliveryPersonRegisterPage";
// import DeliveryPersonLoginComponent from "../components/deliveryPersonLoginComponent";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CustomerRegisterPage = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
						contentStyle: {backgroundColor: "beige"}
					}}
                >
                    <Stack.Screen
                        name = "Customer Register"
                        component = {CustomerRegisterComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Delivery Person Register"
                        component = {DeliveryPersonRegisterPage}
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
                        component = {CustomerRegisterComponent}
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

export default CustomerRegisterPage;