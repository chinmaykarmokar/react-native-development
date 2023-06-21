import React, { useState, useEffect } from "react";

// Import react-native components
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Import components
import LandingPageComponent from "./src/components/landingPageComponent";
import AboutPageComponent from "./src/components/aboutComponent";
import DeliveryPersonRegisterPage from "./src/pages/deliveryPersonRegisterPage";
import CustomerRegisterPage from "./src/pages/customerRegisterPage";
import CustomerTabsPage from "./src/pages/customerHomeTabs";

// Integrate React Redux
import { Provider } from "react-redux";
import Store from "./state/store/store";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const App: React.FC = () => {
	const [token,setToken] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("accessToken");
            if (value !== null) {
                setToken(value);
                setLoggedIn(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    })

    console.log(token);

	return (
		<Provider store = {Store}>
			<View style = {styles.body}>
				<NavigationContainer independent = {true}>
					<Stack.Navigator
						screenOptions = {{
							contentStyle: {backgroundColor: "beige"}
						}}
					>
						{
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
						}
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
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#00cccc"
	}
})

export default App;