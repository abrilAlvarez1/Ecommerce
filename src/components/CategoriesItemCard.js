import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import ShadowCard from './wrappers/ShadowCard'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../global/colors'
import { setProductsFilteredByCategory } from '../features/shopSlice'
import { useDispatch } from 'react-redux'

const CategoriesItemCard = ({item}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => {
      dispatch(setProductsFilteredByCategory(item))
      navigation.navigate("ProductsByCategory", {item })
    }}>
      <ShadowCard style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </ShadowCard>
    </Pressable>
   
  )
}

export default CategoriesItemCard

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.first,
    marginVertical: 10, //esto separa cada tarjeta la una de la otra verticalmente
    marginHorizontal: 30, // el margen a horizontal, separa la tarjeta de los bordes de la panatalla
    padding: 10, // define el relleno interno de la etiqueta
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

  },
  text:{
    color: "black"
  }
})