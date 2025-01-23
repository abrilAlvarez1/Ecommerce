import { StatusBar } from 'expo-status-bar';
import { StyleSheet, w } from 'react-native';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Navigator from './src/navigation/Navigator';
import fonts from '../baseTpFinal/src/global/fonts';
import { Provider } from 'react-redux';
import {store} from './src/store';
import Login from "./src/screens/Login"
import MyProfile from './src/screens/MyProfile';


export default function App() {



  return (
    <>
    <Provider store={store}>

      <Navigator/>
    </Provider>
      
      <StatusBar style="light" backgroundColor={colors.first}/> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
});
