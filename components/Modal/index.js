import React from "react"
import {StyleSheet, Modal, View, Text, Button} from "react-native"

export default function RequestModal(props) {

    const {modalVisible, setModalVisible, deleteItem, itemSelected} = props


    return(
        <Modal visible={modalVisible} trasparent animationType="fade" onRequestClose={()=> setModalVisible(false)}>
        <View style={styles.containerModal}>
          <View style={styles.infoContainer}>
            <Text>Estas seguro de querer eliminar {itemSelected.value}?</Text>
            <View style={styles.containerButton}>
              <Button style={styles.button} title="si" onPress={()=> deleteItem(itemSelected.id)}></Button>
              <Button style={styles.button} title="no" onPress={()=> setModalVisible(false)}></Button>
            </View>
          </View>
        </View>
      </Modal>
    )
}


const styles = StyleSheet.create({
    containerModal: {
        backgroundColor:"rgba(0,0,0, 0.5)",
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
      },
      infoContainer: {
        backgroundColor:"white",
        width:"50%",
        height:"25%"
      },
      containerButton: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"90%"
      },
      button: {
        width:"40%",
        height: "10%"
      }
});