import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {Colors}  from './constantes/colors';

export default function Header() {
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Proyecto CoderHouse</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        
    },
    titulo: {
        fontSize: 20,
        fontWeight: "900",
        color: "white"
        
    }
})