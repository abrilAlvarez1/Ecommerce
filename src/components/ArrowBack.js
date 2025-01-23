import { StyleSheet,Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors';

const ArrowGoBack = () => {

    const navigation = useNavigation()

  return (
      <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
        <AntDesign  name="arrowleft" size={24} color={"black"} />
      </Pressable>
  )
}

export default ArrowGoBack

const styles = StyleSheet.create({
    goBack:{
      position:"absolute",
      left:15,
     
    }
})