import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from "react-native";

// Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Import components
import LandingPageComponent from "./components/landingPageComponent";
import AboutPageComponent from "./components/aboutComponent";
import DeliveryPersonRegisterPage from "./pages/deliveryPersonRegisterPage";
import CustomerRegisterPage from "./pages/customerRegisterPage";

const App: React.FC = () => {
//   const [name, setName] = useState("Chinmay");
//   const [bio, setBio] = useState({age: 19, dob: "April 1 2002"})

//   const clickHandler = () => {
//     setName("Chinmay M. Karmokar");
//     setBio({age: 19, dob: "1st April 2002"})
//   }

//   const inputHandler = (value: string) => {
// 	  setName(value);
//   }

	return (
		<View style = {styles.body}>
			<NavigationContainer independent = {true}>
				<Stack.Navigator
					screenOptions = {{
						contentStyle: {backgroundColor: "beige"}
					}}
				>
					<Stack.Screen
						name = "Landing Page"
						component = {LandingPageComponent}
						options = {{
							header: () => null
						}}
					/>
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
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: "#00cccc"
	}
})

export default App;