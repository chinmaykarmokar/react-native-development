// Import React
import React from "react";

// Import components
import DeliveryPersonLoginComponent from "../components/deliveryPersonLoginComponent";
import DeliveryPersonHomeComponent from "../components/deliveryPersonHomeComponent";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const DeliveryPersonLoginPage: React.FC = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
						contentStyle: {backgroundColor: "beige"}
					}}
                >
                    <Stack.Screen
                        name = "Delivery Person Login"
                        component = {DeliveryPersonLoginComponent}
                    />
                    {/* <Stack.Screen
                        name = "Delivery Person Home"
                        component = {DeliveryPersonHomeComponent}
                        options = {{
                            header: () => null
                        }}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
            <DeliveryPersonLoginComponent/>
        </>
    )
}

export default DeliveryPersonLoginPage;