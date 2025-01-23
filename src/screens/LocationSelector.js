import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import MapPreview from "../../src/components/MapPreview"
import * as Location from "expo-location"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { usePatchLocationMutation } from '../services/user'

const LocationSelector = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const [address, setAddress] = useState("")
    const [triggerLocation] = usePatchLocationMutation()
    const [location, setLocation] = useState({
        lat: "",
        long: ""
    })

    useEffect(() => {
        (async () => {
            const {status} = await Location.requestForegroundPermissionsAsync()
            if(status != "granted") return
            const newLocation = await Location.getCurrentPositionAsync()
            setLocation({
                lat: newLocation.coords.latitude,
                long:newLocation.coords.longitude
            })
        }) ()
        
    }, [])

    useEffect(()=>{
        (
            async () => {
                if(location.lat){
                    const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${googleapi}`
                    try {
                        const  response = await fetch(urlReverseGeocoding)
                        const  data = await response.json()
                        setAddress(data.results[0].formatted_address)
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        )()
    },[location])

    const handleConfirmLocation = () => {
        triggerLocation({localId,address,location})
        navigation.navigate("MyProfile")
    }

  return (
    <View style={styles.container}>
      <Text>Direccion: {address}</Text>
      <MapPreview location={location}/>
      <SubmitButton title="Confirma Ubicacion" onPress={handleConfirmLocation} />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        alignItems:"center",
        gap:15
    }
})