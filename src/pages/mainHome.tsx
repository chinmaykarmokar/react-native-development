// Import React
import React from "react";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Import components
import LandingPageComponent from "../components/landingPageComponent";
import AboutPageComponent from "../components/aboutComponent";
import DeliveryPersonRegisterPage from "./deliveryPersonRegisterPage";
import CustomerRegisterPage from "./customerRegisterPage";
import CustomerTabsPage from "./customerHomeTabs";

const Home = () => {
    return (
        <>
            <NavigationContainer independent = {true}>
                <Stack.Navigator
                    screenOptions = {{
                        contentStyle: {backgroundColor: "beige"}
                    }}
                >
                    {/* {
                        (token || token !== undefined || token !== null) ? 
                            <Stack.Screen
                                name = "Customer Home"
                                component = {CustomerTabsPage}
                                options = {{
                                    header: () => null
                                }}
                            />      
                        :
                            <Stack.Screen
                                name = "Landing Page"
                                component = {LandingPageComponent}
                                options = {{
                                    header: () => null
                                }}
                            />			
                    } */}
                    <Stack.Screen
                        name = "Landing Page"
                        component = {LandingPageComponent}
                        options = {{
                            header: () => null
                        }}
                    />	
                    {/* <Stack.Screen
                        name = "Landing Page"
                        component = {LandingPageComponent}
                        options = {{
                            header: () => null
                        }}
                    />	
                    <Stack.Screen
                        name = "Customer Home"
                        component = {CustomerTabsPage}
                        options = {{
                            header: () => null
                        }}
                    /> */}
                    <Stack.Screen
                        name = "Delivery Person Register"
                        component = {DeliveryPersonRegisterPage}
                        options = {{
                            header: () => null,
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
                        component = {CustomerRegisterPage}
                        options = {{
                            header: () => null,
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

export default Home;