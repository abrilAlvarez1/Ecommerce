import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useGetUserQuery } from '../services/user'
import { useSelector } from 'react-redux'


const MyProfile = () => {

   // const localId = useSelector(state => state.auth.localId)
    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const {data:user,isLoading} = useGetUserQuery({localId})


    if(isLoading) return <View><Text>Cargando</Text></View>

  return (
    <View style={styles.container}>
      <View>
        <Image
        source={user?.image ? {uri:user.image}:require("../../assets/Images/profile.png") }
        resizeMode='cover'
        style={styles.imageContainer}
        />
        </View>
      
      <SubmitButton title="Agregar imagen de perfil " onPress={() => navigation.navigate("ImageSelector")}/>
      <SubmitButton title="Agregar localizacion " onPress={() => navigation.navigate("LocationSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
      marginTop:70,
      alignItems:"center",
      gap:30
    },
    image:{
      width:150,
      height:150
    },
    imageContainer:{
      width:150,
      height:150,
      borderRadius:"50%",
      overflow:"hidden"
    }
})