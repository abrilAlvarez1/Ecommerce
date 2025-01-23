import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import CartStack from './CartStack';
import Login from '../screens/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSession } from '../config/dbSqlLite';
import { setUser } from '../features/userSlice';

const Tab = createBottomTabNavigator();

const Navigator = () => {

  const idToken = useSelector(state => state.user.idToken)
  const dispatch = useDispatch()

  useEffect(() =>{
    (async () => {
      try {
        await init()
        dispatch(deleteUser())
        const sessionUser = await fetchSession()
        console.log(sessionUser)
        if(sessionUser){
          dispatch(setUser(sessionUser))
        }
      }catch(error){
        console.log(error)
      }
    })
  }, [])

  return (
    <NavigationContainer>
       {idToken ? <TabNavigator/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: colors.second, 
    height:70
  },
  
})

