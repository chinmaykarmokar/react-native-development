// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import actions
import { deliveryPersonRegister } from "../../state/actions/deliveryPersonActions";

// Import Axios
import axios from "axios";

// Import react-native components
import { Alert, ScrollView, View, Pressable, Text, TextInput, StyleSheet } from "react-native";

// Import react-native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

const DeliveryPersonRegisterComponent: React.FC = ({navigation}) => {
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [aadhar, setAadhar] = useState();
    const [status, setStatus] = useState("available");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const changeNameHandler = (name: any) => {
        setName(name);
    }

    const changeMobileHandler = (mobile: any) => {
        setMobile(mobile);
    } 

    const changeAadharHandler = (aadhar: any) => {
        setAadhar(aadhar);
    }

    const changeEmailHandler = (email: any) => {
        setEmail(email);
    }

    const changePasswordHandler = (password: any) => {
        setPassword(password);
    }

    const deliveryPersonRegisterPayload = {
        name: name,
        phone: mobile,
        aadhar_no: aadhar,
        status: status,
        email: email,
        password: password
    }

    const config = {
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }

    console.log(deliveryPersonRegisterPayload);

    const deliveryPersonRegisterHandler = () => {
        axios.post("https://burpger-1yxc.onrender.com/api/delivery/deliveryPersonregister", deliveryPersonRegisterPayload, config)
            .then((response: any) => {
                if (response?.data?.message != `Delivery Person with the following email ${email} already exists.`) {
                    Alert.alert("Congratulations!", "You have been registered!", [
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
                        navigation.navigate("Delivery Person Login");
                    },3000)

                    dispatch(deliveryPersonRegister(response));
                }
                else {
                    Alert.alert("Problem!", "User by this email already exists", [
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
                        navigation.navigate("Delivery Person Register");
                    },3000)
                }
            })
    }

    return (
        <ScrollView>           
            <Text style = {styles.navigatorText} onPress = {() => {navigation.navigate("Landing Page")}}>
                <Icon 
                    name = "chevron-left"
                    size = {20}
                /> &nbsp;
                Delivery Person Register
            </Text>
            <View style = {styles.brandHeaderView}>
                <Text style = {styles.brandName}><Icon name = "hamburger" size = {30}/> Burpger | Delivery</Text>
            </View>
            <View style = {styles.acknowledgementView}>
                <Text style = {styles.acknowledgementText}>Already registered?</Text>
                <Text
                    style = {styles.loginText}
                    onPress = {() => {navigation.navigate("Delivery Person Login")}}
                >
                    Login
                </Text>
            </View>
            <View style = {styles.formView}>
                <Text style = {styles.formLabel}>Name</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {name}
                    placeholder = "Name"
                    onChangeText = {changeNameHandler}
                />
                <Text style = {styles.formLabel}>Mobile Number</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {mobile}
                    placeholder = "Mobile Number"
                    keyboardType="phone-pad"
                    onChangeText = {changeMobileHandler}
                />
                <Text style = {styles.formLabel}>Aadhar Number</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {aadhar}
                    placeholder = "Aadhar Number"
                    keyboardType="phone-pad"
                    onChangeText = {changeAadharHandler}
                />
                <Text style = {styles.formLabel}>Email ID</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {email}
                    placeholder = "Email ID"
                    keyboardType="email-address"
                    onChangeText = {changeEmailHandler}
                />
                <Text style = {styles.formLabel}>Password</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {password}
                    placeholder = "Password"
                    secureTextEntry={true}
                    onChangeText = {changePasswordHandler}
                />
                <Pressable style = {styles.registerButton} onPress = {() => {deliveryPersonRegisterHandler()}}>
                    <Text style = {styles.buttonText}>
                        <Icon name = "pen-nib" size = {20}/> Register
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    navigatorText: {
        padding: 20,
        color: "#000",
        fontSize: 20,
        fontFamily: "PatuaOne-Regular"
    },
    brandHeaderView: {
        padding: 20
    },
    brandName: {
        color: "green",
        fontSize: 30,
        fontFamily: "FredokaOne-Regular"
    },
    acknowledgementView: {
        padding: 20
    },
    acknowledgementText: {
        color: "#000",
        fontSize: 18,
        fontFamily: "PatuaOne-Regular"
    },
    loginText: {
        color: "green",
        fontSize: 18,
        fontFamily: "PatuaOne-Regular",
        textDecorationLine: "underline"
    },
    formView: {
        padding: 20
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        fontFamily: "PatuaOne-Regular",
        marginTop: 10
    },
    input: {
        borderWidth: 0.2,
        borderColor: "green",
        borderRadius: 20,
        elevation: 5,
        backgroundColor: "#fff",
        height: 45,
        marginTop: 10,
        fontWeight: "bold",
        fontFamily: "Patua One",
        padding: 10
    },
    registerButton: {
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

export default DeliveryPersonRegisterComponent;