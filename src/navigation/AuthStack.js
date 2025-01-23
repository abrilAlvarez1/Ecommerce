import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import Login from "../screens/Login"
import Signup from "../screens/SingUp"
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        screenOptions={({route}) => ({
          header: () => {
            return <Header title={
              route.name=== "Login" ? "Iniciar Sesion":
              route.name=== "Signup" ? "Registrarse" : ""
            }
            />
          }
        })}
    >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack