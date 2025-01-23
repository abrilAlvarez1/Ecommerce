import { StyleSheet,  } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetail from '../screens/ProductDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ShopStack = () => {


  return (

        <Stack.Navigator
          screenOptions={({route}) => ({
            header:() => {
              return <Header title={
                route.name==="Home" ? "Categories":
              route.name==="ProductsByCategory" ? route.params.item: 
              route.params.product.brand
              }
              showGoBack={true}
              />
            }
          })} 
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({
})