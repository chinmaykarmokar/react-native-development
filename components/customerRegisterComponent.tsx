import React from "react";

// Import react-native components
import { ScrollView, View, Pressable, Text, TextInput, StyleSheet } from "react-native";

// Import react-native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";

const CustomerRegisterComponent: React.FC = ({navigation}) => {
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
                    onPress = {() => {navigation.navigate("Delivery Person Login")}}
                >
                    Login
                </Text>
            </View>
            <View style = {styles.formView}>
                <Text style = {styles.formLabel}>First Name</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "First Name"
                />
                <Text style = {styles.formLabel}>Last Name</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Last Name"
                />
                <Text style = {styles.formLabel}>Age</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Age"
                    keyboardType="phone-pad"
                />
                <Text style = {styles.formLabel}>Address</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Address"
                />
                <Text style = {styles.formLabel}>Mobile Number</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Mobile Number"
                    keyboardType="phone-pad"
                />
                <Text style = {styles.formLabel}>Email ID</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Email ID"
                    keyboardType="email-address"
                />
                <Text style = {styles.formLabel}>Password</Text>
                <TextInput
                    style = {styles.input}
                    placeholder = "Password"
                    secureTextEntry={true}
                />
                <Pressable style = {styles.registerButton}>
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