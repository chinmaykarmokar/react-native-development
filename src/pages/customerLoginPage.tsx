// Import React
import React from "react";

// Import components
import CustomerLoginComponent from "../components/customerLoginComponent";
import CustomerHomeComponent from "../components/customerHomeComponent";
import CustomerHomeStack from "./customerHomeStack";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CustomerLoginPage = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
						contentStyle: {backgroundColor: "beige"}
					}}
                >
                    <Stack.Screen
                        name = "Customer Login"
                        component = {CustomerLoginComponent}
                        options = {{
                            header: () => null
                        }}
                    />
                    <Stack.Screen
                        name = "Customer Home"
                        component = {CustomerHomeStack}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <CustomerLoginComponent/>
        </>
    )
}

export default CustomerLoginPage;