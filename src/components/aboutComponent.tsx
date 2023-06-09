import React from "react";

// Import react-native components
import { StyleSheet, Text, View, Linking } from "react-native";

// Import react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome5';

const AboutPageComponent = () => {
    return (
        <>
            <View style = {styles.body}>
                <Text style = {styles.aboutText}>
                    Burpger is a burger app that can be used to manage food inventories, update inventories, add burgers to cart, order them, assign delivery to delivery persons and receive personalised email alerts about activities.
                    {'\n'}{'\n'}
                    Programming stack used are Next.js, CSS and Redux for the frontend, while the backend is created using Node.js (Express.js) and PostgreSQL. The frontend is deployed on Vercel while the backend is deployed on Render.
                    {'\n'}{'\n'}
                    Little bit about myself - I am a 21-year-old final-year engineering student who has a lot of interest in programming and specifically web development. I am currently learning React-native for app development.
                </Text>
            </View>
            <View style = {styles.socialCard}>
                <Text style = {styles.socialTitle}><Icon name = "share-alt" size = {20}/> Socials</Text>
                <Text style = {styles.socialIcons}>
                    <Icon 
                        name = "linkedin" 
                        size = {40} 
                        onPress = {() => {Linking.openURL("https://www.linkedin.com/in/chinmay-karmokar-b0042b174/")}}
                    /> &nbsp;
                    <Icon 
                        name = "instagram" 
                        size = {40}
                        onPress = {() => {Linking.openURL("https://www.instagram.com/chinmay.js/")}}
                    /> &nbsp;
                    <Icon 
                        name = "github" 
                        size = {40}
                        onPress = {() => {Linking.openURL("https://github.com/chinmaykarmokar")}}
                    /> &nbsp;
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 20
    },
    aboutText: {
        color: "#000",
        fontSize: 18,
        fontFamily: "PatuaOne-Regular"
    },
    socialCard: {
        padding: 20,
        margin: 15,
        height: 120,
        backgroundColor: "beige",
        elevation: 20,
        borderRadius: 20
    },
    socialTitle: {
        color: "#000",
        fontSize: 25,
        fontFamily: "PatuaOne-Regular",
        marginBottom: 5
    },
    socialIcons: {
        color: "#000"
    }
})

export default AboutPageComponent;