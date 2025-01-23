import { StyleSheet, Image, View } from 'react-native'
import { googleApi } from '../googleApi'

const MapPreview = ({location}) => {

    const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
                            center=${location.lat},${location.long}
                            &zoom=13
                            &size=600x300
                            &maptype=roadmap
                            &markers=color:blue%7Clabel:S%7C${location.lat},${location.long}
                            &key=${googleApi}`
    console.log(mapStaticUrl)
  return (
    <View>
      <Image
        source={location.lat
            ? { uri: mapStaticUrl }
            : require("../../assets/Images/map.png") }
        style={styles.image}
      />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300,
        backgroundColor:"grey"
    }
})