import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({order}) => {

    const {createDate, total} = order
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.text}>Date: {createDate}</Text>
        <Text style={styles.Text}>Total: {total}$ ARS</Text>
        </View>
        <Pressable onPress={() =>{navigation.navigate("OrderDetails",{order})}}>
            <AntDesign name="eyeo" size={24} color="black" />
            
        </Pressable>
        
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: colors.first,
        margin:10,
        padding:20,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10
    },
    content:{
        gap:10
    },
    text:{
        color: "black"
    }
})