// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import react-native components
import { Alert, ScrollView, View, Pressable, Text, TextInput, StyleSheet } from "react-native";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import axios
import axios from "axios";

// Import actions
import { customerLogin } from "../../state/actions/customerActions";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import react-native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";

const CustomerLoginComponent = ({navigation}: any) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const changeEmailHandler = (email: any) => {
        setEmail(email);
    }

    const changePasswordHandler = (password: any) => {
        setPassword(password)
    }

    const customerLoginPayload = {
        email: email,
        password: password
    }

    const config = {
        headers: {
            "content-type": "application/json",
            "Access-Control-ALlow-Origin": "*"
        }
    }

    const customerLoginHandler = () => {
        axios.post("https://burpger-1yxc.onrender.com/api/customers/customerLogin", customerLoginPayload, config)
            .then(async (response) => {
                if (!response?.data?.error) {
                    try {
                        await AsyncStorage.setItem("accessToken", response?.data?.accessToken);
                    }
                    catch (error) {
                        console.log(error);
                    }

                    Alert.alert("Login", "Login successful!", [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK', 
                            onPress: () => console.log('OK Pressed')
                        }
                    ])

                    setTimeout(() => {
                        navigation.navigate("Customer Home");
                    },3000)

                    dispatch(customerLogin(response?.data));
                }
                else {
                    Alert.alert("Login", `${response?.data?.error} :(`, [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK', 
                            onPress: () => console.log('OK Pressed')
                        }
                    ])
                
                    setTimeout(() => {
                        navigation.navigate("Customer Login");
                    },3000)
                }
            })
    }

    return (
        <ScrollView>
            <View style = {styles.brandHeaderView}>
                <Text style = {styles.brandName}><Icon name = "hamburger" size = {30} /> Burpger | Customer</Text>
            </View>
            <View style = {styles.formView}>
                <Text style = {styles.formLabel}>Email ID</Text>
                <TextInput
                    style = {styles.input}
                    value = {email}
                    placeholder = "Email ID"
                    placeholderTextColor = "gray"
                    keyboardType = "email-address"
                    onChangeText = {changeEmailHandler}
                />
                <Text style = {styles.formLabel}>Password</Text>
                <TextInput
                    style = {styles.input}
                    value = {password}
                    placeholder = "Password"
                    placeholderTextColor = "gray"
                    secureTextEntry = {true}
                    onChangeText = {changePasswordHandler}
                />
                <Pressable style = {styles.loginButton} onPress = {() => {customerLoginHandler()}}>
                    <Text style = {styles.buttonText}>
                        <AntIcon name = "login" size = {20}/> Login
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles =  StyleSheet.create({
    brandHeaderView: {
        // alignItems: "center",
        // justifyContent: "center",
        padding: 20
    },
    brandName: {
        color: "blue",
        fontSize: 30,
        fontFamily: "FredokaOne-Regular"
    },
    formView: {
        padding: 20
    },
    formLabel: {
        color: "#000",
        marginTop: 10,
        fontSize: 18,
        fontFamily: "PatuaOne-Regular"
    },
    input: {
        borderWidth: 0.2,
        borderColor: "blue",
        borderRadius: 20,
        elevation: 5,
        backgroundColor: "#fff",
        height: 45,
        marginTop: 10,
        fontWeight: "bold",
        fontFamily: "Patua One",
        padding: 10,
        color: "#000"
    },
    loginButton: {
        backgroundColor: "#ff8c00",
        width: 135,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 20,
        borderRadius: 30,
        elevation: 10
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
        fontFamily: "PatuaOne-Regular"
    }
})

export default CustomerLoginComponent;