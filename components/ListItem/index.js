import React from "react"
import {FlatList, View, Text, Button, StyleSheet} from "react-native"


export default function ListItem(props) {

    const {list, onHandleModal} = props;

    return(
        <>
        {list.length > 0 ?
            <FlatList
              data={list}
              renderItem={data=>(<View style={styles.containerItem}>
                                    <Text style={{fontWeight: "bold", fontSize: 20, color:"black"}}>{data.item.value}</Text>
                                    <Button title="X" onPress={()=>onHandleModal(data.item)}></Button>
                                </View>
                                )}
                                keyEstractor={(item)=> item.id}
            />
            : <Text>No hay tareas, agrega una para empezar</Text>
            }
        </>    
    )
}

const styles = StyleSheet.create({
    containerItem: {
        width:"90%",
        alignSelf:"center",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginVertical:"3%"
      },
})