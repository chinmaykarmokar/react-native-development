import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const FirstComponent: React.FC = () => {
  const [name, setName] = useState("Chinmay");
  const [bio, setBio] = useState({age: 19, dob: "April 1 2002"})

  const clickHandler = () => {
    setName("Chinmay M. Karmokar");
    setBio({age: 19, dob: "1st April 2002"})
  }

  const inputHandler = (value: string) => {
	  setName(value);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.texts}>Hello I am {name}!</Text>
          <Text style={styles.texts}>I am {bio.age} years old and I was born on {bio.dob}</Text>
          <View style={styles.simpleBtn}>
            <Button title="Update Name" onPress={clickHandler}/>
          </View>
        </View>
        <View style={styles.header}>
			<Text>LOGIN</Text>
          	<TextInput
            	style={styles.inputArea}
				placeholder="Enter your Name"
				onChangeText={inputHandler}
          	/>
			<Text>The name you entered is {name}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f0f5f5"
  },
  header: {
    backgroundColor: "#e6e6e6",
    padding: 20,
    elevation: 15,
    borderRadius: 20
  },
  texts: {
    color: "#003300",
    fontWeight: "bold",
  },
  simpleBtn: {
    marginTop: 15
  },
  inputArea: {
    borderBottomWidth: 5,
    borderColor: "#ff0000",
    padding: 10,
  }
})

export default FirstComponent;