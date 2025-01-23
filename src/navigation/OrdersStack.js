import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from "../screens/Orders"
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
        header:() => {
          return <Header title= "Ordenes" showGoBack={false}/>
        }
      })} >
        <Stack.Screen name="Cart" component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})