import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import cart from "../data/cart.json"
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { usePostOrdersMutation } from "../services/orders"
import { useSelector } from 'react-redux'
import { useGetCartQuery, usePostCartMutation } from '../services/cart'
import { useEffect, useState } from 'react'

const Cart = () => {

  const [triggerPost] = usePostOrdersMutation()
  const localId = useSelector(state => state.user.localId)
  const [data] = useGetCartQuery({localId})
  const [total, setTotal] = useState(0)
  

  useEffect(() => {
    if (data) {
      setTotal(data.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }else{
      setTotal(data)
    }
  }, [data])

  const confirmCart = () => {
    triggerPost({ id: "2", products: [{ id: "1" }], total: 100 });
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
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