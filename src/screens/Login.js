import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import { colors } from '../global/colors'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
import { loginSchema } from '../validations/loginSchema'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const navigation = useNavigation()
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
        try{
            loginSchema.validateSync({ email, password })
            const response = await triggerLogin({email, password})
            console.log("Login response:", response);
            
            const user = {
                email:response.data.email,
                idToken:response.data.idToken,
                localId: response.data.localId
            }
            dispatch(setUser(user))
            await deleteSesion()
            await insertSession(user.localId,user.email,user.idToken)
            
        }
        catch (error){
            console.log("Validation error:", error);
            switch(error.path){
                case "email":
                    setEmailError(error.message)
                    setPasswordError("")
                    break
                case "password":
                    setPasswordError(error.message)
                    setEmailError("")
                    break
            }
        }
    }

    return (
        <View style={styles.main}>
          <View style={styles.container}>
              <Text style={styles.title} >Ingresar</Text>
              <InputForm
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure = {false}
                error={emailError}
              />
              <InputForm
                label="Password"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={passwordError}
              />
              <SubmitButton  title="Ingresar" onPress={onSubmit}/>
              <Text style={styles.sub}>No tienen una cuenta?</Text>
              <Pressable onPress={()=> navigation.navigate("Signup")} >
                  <Text style={styles.subLink}>Registrarme</Text>
              </Pressable>
          </View>
        </View>
      )
    }
    
    
export default Login
    
    
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        width:"90%",
        backgroundColor: colors.second,
        gap:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
    },
    title:{
        fontSize:22,
        fontFamily:"Lobster",
        color:"black"
    },
    sub:{
        fontSize:14,
        fontFamily:"Josefin",
        color:"black"
    },
    subLink:{
        fontSize:14,
        fontFamily:"Josefin",
        color:"black"
    }
})