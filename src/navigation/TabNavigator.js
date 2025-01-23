import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import { colors } from '../global/colors';
import TabBarIcon from '../components/TabBarIcon';
import MyProfileStack from './MyProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {


  return (

      <Tab.Navigator
      screenOptions={{
        headerShown:false, //borra header doble
        tabBarShowLabel:false,
        tabBarStyle:styles.tabBar,
        tabBarLabelPosition: "beside-icon"
      }}>
        <Tab.Screen 
        name="ShopStack" 
        component={ShopStack}
        options={{
          tabBarIcon:({focused}) => <TabBarIcon focused={focused} text="Tienda" icon="isv"/>
        }}
        />
        <Tab.Screen 
        name="CartStack" 
        component={CartStack}
        options={{
          tabBarIcon:({focused}) => <TabBarIcon focused={focused} text="Carrito" icon="shoppingcart"/>
        }}
        />
        <Tab.Screen 
        name="OrdersStack" 
        component={OrdersStack}
        options={{
          tabBarIcon:({focused}) => <TabBarIcon focused={focused} text="Mis compras" icon="bars"/>
        }}/>
        <Tab.Screen 
        name="MyProfileStack" 
        component={MyProfileStack}
        options={{
          tabBarIcon:({focused}) => <TabBarIcon focused={focused} text="Mi Perfil" icon="user"/>
        }}/>
      </Tab.Navigator>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: colors.second, 
    height:70
  },
  
})

