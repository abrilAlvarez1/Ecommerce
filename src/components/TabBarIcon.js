import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const TabBarIcon = ({focused,text, icon}) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={24} color="black" />
      <Text>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
  container:{
    width:90,
    alignItems:"center",
    gap:5
},
})
