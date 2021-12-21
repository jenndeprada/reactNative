import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
//****************Componentes a consumir por app**************/
import RequestModal from "./components/Modal/index"
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

//**************Componentes del juego***********/
import Header from "./src/components/header"
import Card from './src/components/Card';
import StartGame from './src/components/screens/StartGame';
import Input from './src/components/Input';
import StartPlaying from './src/components/screens/StartPlaying';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function App() {

  // const [loaded] = useFonts({
  //   Saens : require("./assets/fonts/Open_Sans,Zen_Kaku_Gothic_Antique/Open_Sans/static/OpenSans_Condensed/OpenSans_Condensed-Bold.ttf"),
  //   bold: require(""),

  // })

//if(!loaded) return <AppLoading/>


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
/*     <View style={styles.container}>
        <RequestModal modalVisible={modalVisible} setModalVisible={setModalVisible} deleteItem={deleteItem} itemSelected={itemSelected}/>
        <AddItem setTextInput={setTextInput} onAdd={onAdd}/>
        <ListItem list={list} onHandleModal={onHandleModal}/>
    </View> */
    <SafeAreaView style={styles.container}>
        <Header/>
        <StartGame>
             <Card style={styles.card}>
                    <Text>Choose a Number</Text>
                        <Input/>
                    <View style={styles.buttons}>
                        <Button title="Clean" onPress={()=> {}}></Button>
                        <Button title="Confirm" onPress={()=> {}}></Button>
                    </View>
             </Card>
             <Card style={styles.secondCard}>
                <Text>You choose:</Text>
                  <Text>25</Text>
                <Button title="Start playing"></Button>
             </Card>

              <Card style={styles.screen}>
                  <StartPlaying/>
              </Card>

        </StartGame>

       
        
        
    </SafeAreaView>

 
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  },

  card: {
    width: 370,
    height:230,
  },
  secondCard: {
    width: 300,
    height: 150,
    justifyContent: "space-evenly",
  },
  buttons: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
    
}, 
screen: {
  width: 370,
  height: 230,
}

  
  
  
});
