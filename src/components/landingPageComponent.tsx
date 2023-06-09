import React from "react";

// Import react-native components
import { Text, StyleSheet, View, ScrollView, Pressable, Image } from "react-native";

// Import Navigation Container

// Import react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome5';

// Use static images
const burpgerHomeImage = require("../../assets/images/burpger-home.png");

const LandingPageComponent = ({navigation}: any) => {
    return (
        <View style = {styles.mainPageView}>
            <ScrollView contentContainerStyle = {styles.body}>
                <Text style = {styles.brandName}>
                    <Icon name="hamburger" size = {30} color = "#000"/> Burpger
                    {'\n'}
                </Text>
                <Text style = {styles.appDescription}>
                    Delicious Burgers on the go!
                    {'\n'}
                </Text>
                <Pressable style = {styles.userButtons} onPress = {() => {navigation.navigate('Delivery Person Register')}}>
                    <Text style = {styles.buttonText}>Delivery</Text>
                </Pressable>

                <Pressable style = {styles.userButtons} onPress = {() => {navigation.navigate('Customer Register')}}>
                    <Text style = {styles.buttonText}>Customer</Text>
                </Pressable>

                <Pressable style = {styles.aboutButton} onPress = {() => {navigation.navigate('About')}}>
                    <Text style = {styles.aboutButtonText}>
                        <Icon name = "info-circle" size = {20} color = "#ff8c00"/> About Us
                    </Text>
                </Pressable>

                <Image
                    style = {styles.homeImageStyle}
                    source = {burpgerHomeImage}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        // backgroundColor: "beige"
    },
    mainPageView: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    brandName: {
        textAlign: "center",
        fontFamily: "FredokaOne-Regular",
        fontSize: 30,
        color: "#000"
    },
    appDescription: {
        textAlign: "center",
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 27,
        color: "#000"
    },
    userButtons: {
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff8c00",
        width: 140,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 10,
        borderRadius: 30
    },
    buttonText: {
        fontFamily: "PatuaOne-Regular",
        color: "#fff"
    },
    aboutButton: {
        elevation: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        width: 140,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 25,
        borderRadius: 30
    },
    aboutButtonText: {
        fontFamily: "PatuaOne-Regular",
        fontSize: 20,
        color: "#fff"
    },
    homeImageStyle: {
        height: 300,
        width: 300,
        margin: 30
    }
})

export default LandingPageComponent;