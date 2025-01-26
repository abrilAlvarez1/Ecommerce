import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import cart from "../data/cart.json"
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { usePostOrdersMutation } from "../services/orders"
import { useSelector } from 'react-redux'
import { useGetCartQuery, useDeleteCartMutation } from '../services/cart'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import EmptyList from "../components/EmptyList"

const Cart = () => {

  const navigation = useNavigation()
  const [triggerPost] = usePostOrdersMutation()
  const [triggerDeleteCart] = useDeleteCartMutation()
  const localId = useSelector(state => state.user.localId)
  const {data:cart} = useGetCartQuery({localId})
  const [total, setTotal] = useState(0)
  

  useEffect(() => {
    if (cart) {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.quantit, 0));

    }
  }, [cart])

  const confirmCart = () => {
    const createDate = new Date().toLocaleString()
    const order = {
      products:cart,
      createDate,
      total
    }
    triggerPost({order,localId})
    triggerDeleteCart({localId})
    navigation.navigate("OrdersStack")
  }

  if(!cart) return <EmptyList message="Carrito vacio"/>

  return (
    <View style={styles.container}>
      <FlatList
      data={cart}
      keyExtractor={item => item.id}
      renderItem={({item}) => <CartItem product={item}/>}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>total {total}$ ARS</Text>
     
        <Pressable style={styles.button} onPress={confirmCart}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
        flex:1,
        position:"relative"
    },
    containerTotal:{
        width:"100%",
        backgroundColor:colors.first,
        flexDirection:"row",
        padding:15,
        justifyContent:"space-around",
        alignItems:"center",
        position:"absolute",
        bottom:0
    },
    text:{
        color:"black",
        fontSize:16
    },
    button:{
        backgroundColor:"white",
        padding:10,
        borderRadius:5
    },
    buttonText:{
        color:"black",
    }

})