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
import DeliveryPersonLoginComponent from "./src/components/deliveryPersonLoginComponent";
import CustomerRegisterPage from "./src/pages/customerRegisterPage";
import CustomerLoginComponent from "./src/components/customerLoginComponent";
import CustomerHomeStack from "./src/pages/customerHomeStack";
import DeliveryPersonStack from "./src/pages/deliveryPersonStack";

// Integrate React Redux
import { Provider } from "react-redux";
import Store from "./state/store/store";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const App: React.FC = () => {
	const [customerToken, setCustomerToken] = useState<any>();
	const [deliveryPersonToken, setDeliveryPersonToken] = useState<any>();
    const [loggedIn, setLoggedIn] = useState(true);

    const getCustomerToken = async () => {
        try {
            const value = await AsyncStorage.getItem("accessToken");
            if (value !== null) {
                setCustomerToken(value);
                setLoggedIn(true);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

	const getDeliveryPersonToken = async () => {
        try {
            const value = await AsyncStorage.getItem("deliveryPersonToken");
            if(value !== null) {
                setDeliveryPersonToken(value);
				setLoggedIn(true);
            }
        } 
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCustomerToken();
		getDeliveryPersonToken();
    },[])

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
							(customerToken) ? 
								<Stack.Screen
									name = "Customer Home"
									component = {CustomerHomeStack}
									options = {{
										header: () => null
									}}
								/>
							:
							(deliveryPersonToken) ? 
								<Stack.Screen
									name = "Delivery Person Home"
									component = {DeliveryPersonStack}
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
						{/* <Stack.Screen
							name = "Landing Page"
							component = {LandingPageComponent}
							options = {{
								header: () => null
							}}
						/>		 */}
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