import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from "../screens/Cart"
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
        header:() => {
          return <Header title= "Carrito" showGoBack={false}/>
        }
      })} >
        <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})