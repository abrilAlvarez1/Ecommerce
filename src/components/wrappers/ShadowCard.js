import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShadowCard = ({children, style}) => {
  return (
    // aplico mas de un estilo en mi view
    <View style={[style,styles.container]}> 
      {children}
    </View>
  )
}

export default ShadowCard

const styles = StyleSheet.create({
    container:{
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elavation: 9
    }
})