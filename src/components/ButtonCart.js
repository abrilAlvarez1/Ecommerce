import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const ButtonCart = () => {
  return (
    <View>
      <Pressable style={styles.button}>
      <AntDesign style={styles.icon} name="shoppingcart" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default ButtonCart

const styles = StyleSheet.create({
    button:{
        width:50,
        height:50,
       
    },
    icon:{
        backgroundColor:"red"
    }
})