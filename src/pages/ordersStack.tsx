// Import React
import React from "react";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Import components
import OrdersComponent from "../components/ordersComponent";
import CartComponent from "../components/cartComponent";


const OrdersStack = () => {
    return (
        <NavigationContainer independent = {true}>
            <Stack.Navigator>
                <Stack.Screen
                    name = "Orders Page"
                    component = {OrdersComponent}
                    options = {{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name = "Cart Page"
                    component = {CartComponent}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default OrdersStack;