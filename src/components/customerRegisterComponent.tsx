// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import react-native components
import { Alert, ScrollView, View, Pressable, Text, TextInput, StyleSheet } from "react-native";

// Import Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Import actions
import { customerRegister } from "../../state/actions/customerActions";

// Import react-native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const CustomerRegisterComponent: React.FC = ({navigation}:  any) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [age, setAge] = useState<any>("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const changeFirstNameHandler = (firstname: any) => {
        setFirstName(firstname);
    }

    const changeLastNameHandler = (lastname: any) => {
        setLastName(lastname);
    }
    
    const changeAgeHandler = (age: any) => {
        setAge(age);
    }

    const changeAddressHandler = (address: any) => {
        setAddress(address);
    }

    const changeMobileHandler = (mobile: any) => {
        setMobile(mobile);
    }

    const changeEmailHandler = (email: any) => {
        setEmail(email);
    }

    const changePasswordHandler = (password: any) => {
        setPassword(password);
    }

    const customerRegisterPayload = {
        firstname: firstName,
        lastname: lastName,
        age: age,
        address: address,
        mobile: mobile,
        email: email,
        password: password
    }

    const config = {
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }

    const customerRegisterHandler = () => {
        axios.post("https://burpger-1yxc.onrender.com/api/customers/customerRegister", customerRegisterPayload, config)
        .then((response: any) => {
            console.log(response.data.error);

            if (!response?.data?.error) {
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
                    navigation.navigate("Customer Login");
                },3000)

                return dispatch(customerRegister(response));
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
                    navigation.navigate("Customer Register");
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
                Customer Register
            </Text>
            <View style = {styles.brandHeaderView}>
                <Text style = {styles.brandName}><Icon name = "hamburger" size = {30}/> Burpger | Customer</Text>
            </View>
            <View style = {styles.acknowledgementView}>
                <Text style = {styles.acknowledgementText}>Already registered?</Text>
                <Text
                    style = {styles.loginText}
                    onPress = {() => {navigation.navigate("Customer Login")}}
                >
                    Login
                </Text>
            </View>
            <View style = {styles.formView}>
                <Text style = {styles.formLabel}>First Name</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {firstName}
                    placeholder = "First Name"
                    onChangeText = {changeFirstNameHandler}
                />
                <Text style = {styles.formLabel}>Last Name</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {lastName}
                    placeholder = "Last Name"
                    onChangeText = {changeLastNameHandler}
                />
                <Text style = {styles.formLabel}>Age</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {age}
                    placeholder = "Age"
                    keyboardType="phone-pad"
                    onChangeText = {changeAgeHandler}
                />
                <Text style = {styles.formLabel}>Address</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {address}
                    placeholder = "Address"
                    onChangeText = {changeAddressHandler}
                />
                <Text style = {styles.formLabel}>Mobile Number</Text>
                <TextInput
                    style = {styles.input}
                    defaultValue = {mobile}
                    placeholder = "Mobile Number"
                    keyboardType="phone-pad"
                    onChangeText = {changeMobileHandler}
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
                <Pressable style = {styles.registerButton} onPress = {() => customerRegisterHandler()}>
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
        color: "blue",
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
        color: "blue",
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
        borderColor: "blue",
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

export default CustomerRegisterComponent;