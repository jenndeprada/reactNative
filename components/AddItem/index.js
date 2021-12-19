import React from "react"
import { StyleSheet, TextInput, View, Button} from "react-native"

export default function AddItem(props) {
    const {setTextInput, onAdd} = props

    return (
        <View style={styles.containerInput}>
            <TextInput placeholder="Escribe aca" style={styles.input} onChangeText={(text)=> setTextInput(text)}/>
            <Button title="Agregar" onPress={()=> onAdd()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor:"grey", 
        borderBottomWidth: 5, 
        width:"70%",
        
      },
      containerInput: {
        flexDirection:"row",
        width:"100%",
        height:"10%",
        marginTop:"15%",
        justifyContent: "space-around",
        alignItems:"center"
    
      }
})