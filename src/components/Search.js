import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {colors} from '../global/colors'
import { useState } from 'react';

const Search = ({onChangeKeyWord}) => {

    const [textInput, setTextInput] = useState("")
    const [errorInput, setErrorInput] = useState("")

    const search = () => {
      const regex = /[!#$%&/()=?¡¿*]/  // expresiones irregulares /[xxxx]/
      if(regex.test(textInput)){
        setErrorInput("No se permiten caracteres especiales")
      }else{
        setErrorInput("")
        onChangeKeyWord(textInput)
      }
    }

    const removeSearch = () => {
      onChangeKeyWord("")
      setTextInput("") // borra el texto de la busqueda
      setErrorInput("")
    }

  return (
    <View style={styles.container}>
      <View style={styles.input} >
        <TextInput 
        value={textInput}
        onChangeText={(text) => setTextInput(text)} // cuando cambia mi input "text" se almacena en settextinput
        placeholder='Buscar'
        placeholderTextColor="black"
        />
      </View>
      <Pressable style={styles.button} onPress={search}>
        <AntDesign name="search1" size={20} color="black" />
        {<Text >{errorInput ? errorInput : ""}</Text>}
      </Pressable>
      <Pressable style={styles.button} onPress={removeSearch}>
        <MaterialIcons name="cancel" size={22} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: "row", // para que queden los botones uno al lado del otro
        padding: 10,
        alignContent: "center",
        alignItems: "center"
    },
    input:{
        backgroundColor: colors.second,
        paddingLeft: 10,
        borderRadius: 4,
        flex: 1
    },
    button:{
        margin: 5
    }
})