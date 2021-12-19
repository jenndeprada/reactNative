import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
//****************Componentes a consumir por app**************/
import RequestModal from "./components/Modal/index"
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


export default function App() {






  const [list, setList] = useState([])
  const [textInput, setTextInput] = useState("")

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, SetItemSelected] = useState({})

  const onHandleModal = (item) => {
    SetItemSelected(item)
    setModalVisible(true)

  }

  const onAdd = () => {
    setList([...list, {id:Math.floor(Math.random()*100) + 1, value: textInput}])
  }

  const deleteItem = (id) => {
    let borrado = list.filter(t => id !== t.id);
    setList(borrado)
    setModalVisible(false)
  }

  return (
   
    <View style={styles.container}>
      <RequestModal modalVisible={modalVisible} setModalVisible={setModalVisible} deleteItem={deleteItem} itemSelected={itemSelected}/>

      <AddItem setTextInput={setTextInput} onAdd={onAdd}/>

      <ListItem list={list} onHandleModal={onHandleModal}/>
    
      
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
   height:"100%",
   
  },
  
  
  
});
