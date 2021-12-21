import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";


export default function Input() {

    const [value, setValue] = useState("")
    const handlerInput = (text) => {
        setValue(text.replace(/[^0-9]/g), "")
    }

    return(
        <TextInput style={style.container} onChangeText={handlerInput} value={value} keyboardType={"numeric"} maxLength={2}/>
    )
}

const style = StyleSheet.create({
    container: {
      marginVertical: 20,
      height: 40,
      width: 80,
      borderBottomColor: "gray",  
      borderBottomWidth: 2,
      textAlign: "center",
      fontSize: 25,
      
    },
})