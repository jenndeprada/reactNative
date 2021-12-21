import React from "react"
import {StyleSheet, View, Text} from "react-native"

export default function StartGame(props) {
    return(
        <View style={style.container}>
            <Text style={style.text}>Start Playing!</Text>
          {props.children}  
        </View>      
    )
}


const style = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: "center", 
    },
    title: {
        marginVertical: 10,
        fontSize: 16,
    },
    text: {
        marginTop: 15,
    }
})