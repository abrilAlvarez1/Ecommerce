import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {colors} from "../global/colors"


const OrderDetails = () => {

    const route = useRoute()
    const order = route.params.order
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text>Fecha: {order.createDate}</Text>
      <Text>Productos:</Text>
        {order.products.map((item) => (
          <View key={item.id} style={styles.productContainer}>
            <Text style={styles.text}> {item.title}</Text>
            <Text>Precio: ${item.price} ARS</Text>
          </View>
        ))}
        <Text>Total: ${order.total} ARS</Text>
      </View>
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    alignContent:"center",
    borderRadius:10
  },
  productContainer: {
    marginVertical: 10,
    backgroundColor: colors.first,
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  content:{
    width:"90%",
    height:"60%",
    backgroundColor: colors.thirth,
    borderRadius:10,
    padding: 20,
    alignItems: 'center',
  }

})