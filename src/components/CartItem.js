import { StyleSheet, Text, View, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../global/colors';
import { useDeleteCartProductMutation } from '../services/cart';
import { useSelector } from 'react-redux';

const CartItem = ({product}) => {

    const {description,title, price, quantity} = product
    const localId = useSelector( state => state.user.localId)
    const [triggerDeleteCartItem] = useDeleteCartProductMutation()

    const deleteCartProduct = () => {
        triggerDeleteCartItem({localId,productId:product.id})
    }

    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.containerText}>
                <Text style={styles.text}>Precio: {price}$  ARG</Text>
                <Text style={styles.text}>Cantidad: {quantity}</Text>
            </View>
          </View>
          <Pressable onPress={deleteCartProduct} >
          <Ionicons style={styles.icon} name="trash-outline" size={24} color="black" />
          </Pressable>
          
        </View>
      )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        margin:10,
        borderRadius:5,
        padding:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor: colors.first
    },
    content:{
        width:"80%",
        gap:15
    },
    containerText:{
        flexDirection:"row",
        gap:20

    },
    title:{
        fontSize:15,
        color:"black",
       
    },
    description:{
        color: "black"
    },
    text:{
        color: "black",
        fontSize:16
    },
    icon:{
        backgroundColor: "red"
    }
})