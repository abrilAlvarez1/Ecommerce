import {Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({product}) => {

  const navigation = useNavigation()
  const thumbnail = product?.thumbnail || require("../../assets/Images/profile.png");

  return (
      // para imagenes que son url se pone {uri:objeto.url}
    <Pressable style={styles.container} onPress={() => navigation.navigate("ProductDetail",{product})}>
      <Image style={styles.img} source={{uri:thumbnail}} resizeMethod='cover'/>
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.containerText}>          
          <Text style={styles.text}>Price: ${product.price}</Text>
          <Text style={styles.text}>Stock: {product.stock}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.second,
    marginHorizontal: 8,
    marginVertical: 20,
    borderRadius: 15,
    padding: 10,
    gap: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  img:{
    width: 50,
    height: 50,
    resizeMode: "cover"
  },
  containerText:{
    backgroundColor: colors.first,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    padding: 10
  },
  title:{
    color:"black",
    fontSize: 15
  },
  text:{
    color: "black"
  }
})