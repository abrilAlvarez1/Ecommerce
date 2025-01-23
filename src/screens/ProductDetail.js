import { Pressable ,StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { usePostCartMutation } from '../services/cart'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ProductDetail = ({route}) => {

  const {product} = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProduct] = usePostCartMutation()
  const navigation = useNavigation()


  const handleAddProduct = async () => {
    const cartProduct = {
      ...product,
      quantit:1
    }
    const result = await triggerAddProduct({localId,cartProduct })
    navigation.navigate("CartStack")
  }

  return (
    <View style={styles.container}>
      {
        product.thumbnail ? (
          <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode='contain' />
        ) : null
      }
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: {product.price} $ ARG</Text>
      <Pressable style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    gap:10
  },
  image:{
    width:"100%",
    height:200,
    backgroundColor: colors.second
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    paddingVertical:20
  },
  description:{
    fontSize:14,
    padding:20,
    textAlign:"center"
  },
  price:{
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:50,
    paddingVertical:20,
    textAlign:"right"
  },
  button:{
    backgroundColor: colors.first,
    marginHorizontal:10,
    padding:10,
    alignItems:"center",
    borderRadius:6
  },
  textButton:{
    fontSize:20,
    color: "black"
  }
})