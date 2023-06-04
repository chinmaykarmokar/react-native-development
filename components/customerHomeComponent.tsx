// Import React and its hooks
import React, { useState, useEffect } from "react";

// Import React Native Components
import { ScrollView, Text } from "react-native";

// Import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomerHomeComponent: React.FC = () => {
    const [token, setToken] = useState("");

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('accessToken')
            if(value !== null) {
                setToken(value);
            }
        } 
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <>
            <ScrollView>
                <Text>This is the customer home page!</Text>
                {/* <Text>{token}</Text> */}
            </ScrollView>
        </>
    )
}

export default CustomerHomeComponent;