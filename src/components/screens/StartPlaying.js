import React from "react"
import {StyleSheet, View, Text, Button} from "react-native"
import Card from "../Card"
import {Colors} from "../constantes/colors"

export default function StartPlaying() {
    return(
          <View style={style.container}>
              <Text style={{marginTop: 20}}>Could it be?</Text>
              <Text style={style.number}>50</Text>
              <Card style={style.containerButton}>
                <Button title="Lower"></Button>
                <Button title="Higher"></Button>
              </Card>
          </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 9,
        alignItems: "center", 
    },
    containerButton: {
        width: 290,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    number: {
        color: Colors.primary,
        fontSize: 22,
    }
})