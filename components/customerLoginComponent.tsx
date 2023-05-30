// Import React
import React from "react";

// Import react-native components
import { ScrollView, View, Pressable, Text, TextInput, StyleSheet } from "react-native";

// Import react-native vector icons
import Icon from "react-native-vector-icons/FontAwesome5";
import AntIcon from "react-native-vector-icons/AntDesign";

const CustomerLoginComponent: React.FC = () => {
    return (
        <ScrollView>
            <View style = {styles.brandHeaderView}>
                <Text style = {styles.brandName}><Icon name = "hamburger" size = {30} /> Burpger | Customer</Text>
            </View>
            <View style = {styles.formView}>
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
                <Pressable style = {styles.loginButton}>
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
        padding: 10
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