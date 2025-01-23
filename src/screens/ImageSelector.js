import { StyleSheet, Image, View } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react'
import { usePatchImageProfileMutation } from '../services/user'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const ImageSelector = () => {

    const localId = useSelector(state => state.user.localId)
    const [image, setImage] = useState("")
    const [triggerAddImageProfile] = usePatchImageProfileMutation()
    const navigation = useNavigation()

    const pickImg = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) return
        const result = await ImagePicker.launchCameraAsync({
            aspect:[2,1],
            quality:0.2,
            base64: true,
            allowsEditing:true
        })
        if(result.canceled) return
        setImage("data:image/jpg;base64," + result.assets[0].base64)
    }


    const confirmImg = () =>{
        triggerAddImageProfile({localId, image})
        navigation.navigate("MyProfile")
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image
                source={ image ? { uri: image } :require("../../assets/Images/profile.png") }
                resizeMode='cover'
                style={styles.image}
            />
        </View>
      <SubmitButton title="Tomar Imagen " onPress={pickImg}/>
      <SubmitButton title="Confirmar" onPress={confirmImg}/>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    containerImage:{
        width:150,
        height:150,
        borderRadius:"50%",
        overflow:"hidden"
    },
    image:{
        width:150,
        height:150,
    }
})