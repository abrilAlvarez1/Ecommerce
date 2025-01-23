import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Menu from "../screens/Menu"
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const MenuStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
        header:() => {
          return <Header title= "Home" showGoBack={false}/>
        }
      })} >
        <Stack.Screen name="Home" component={Menu}/>
    </Stack.Navigator>
  )
}

export default MenuStack

const styles = StyleSheet.create({})