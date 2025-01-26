import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from "../screens/Orders"
import Header from '../components/Header'
import OrderDetails from '../screens/OrderDetails'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
        header:() => {
          return <Header title={ 
            route.name==="OrderDetails" ? "Detalle de Orden": "Ordenes "
          } 
          showGoBack={false}/>
        }
      })} >
        <Stack.Screen name="Cart" component={Orders}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails}/>
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})