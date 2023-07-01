// Import React
import React from "react";

// Import react native components
import { ScrollView, View, Text, StyleSheet } from "react-native";

// Import react native vector icons
import Icon from "react-native-vector-icons/FontAwesome5"

const Loader = () => {
    const burgerQuotesArray = ["Life is too short for a well-done burger", "A perfectly round quarter pound", "Always a good time for burgers", "It is burger o clock", "Extra cheese, please"];

    const singleBurgerQuoteArrayIndex = Math.round(Math.random()*(burgerQuotesArray.length - 1));

    const singleBurgerQuote = burgerQuotesArray[singleBurgerQuoteArrayIndex];

    return (
        <>
            <ScrollView contentContainerStyle = {styles.fullPageStyle}>
                <View>
                    <Text style = {styles.iconStyle}>
                        <Icon name = "hamburger" size = {100}/>
                    </Text>
                    <Text style = {styles.quoteStyle}>
                        "{singleBurgerQuote}"
                    </Text>
                    <Text style = {styles.loadingText}>
                        Loading...
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    fullPageStyle: {
        flex: 1,
        backgroundColor: "beige",
        alignItems: "center",
        justifyContent: "center"
    },
    iconStyle: {
        color: "#000",
        textAlign: "center",
        padding: 5
    },
    quoteStyle: {
        color: "#000",
        fontFamily: "DMSerifDisplay-Regular",
        fontSize: 30,
        textAlign: "center",
        padding: 5
    },
    loadingText: {
        color: "#000",
        padding: 5,
        fontSize: 15,
        fontFamily: "PatuaOne-Regular",
        textAlign: "center"
    }
})

export default Loader;