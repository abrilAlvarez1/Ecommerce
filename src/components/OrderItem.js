import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors'

const OrderItem = ({order}) => {
    const {createDate, total, id} = order
  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.text}>{createDate}</Text>
        <Text style={styles.Text}>{total}</Text>
        </View>
        <AntDesign name="eyeo" size={24} color="black" />
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