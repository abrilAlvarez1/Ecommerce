import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArrowGoBack from './ArrowBack'
import { colors } from '../global/colors'
import ButtonCart from './ButtonCart'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import {deleteSesion} from "../config/dbSqlLite"
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({title, showGoBack}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onLogout = () => {
    deleteSesion()
    dispatch(deleteUser())
  }

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && showGoBack ? <ArrowGoBack/>: null}
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={20} color={colors.lightGray} />
    </Pressable>
    </View>
)}

export default Header

const styles = StyleSheet.create({

  container:{
    backgroundColor: colors.second,
    marginTop: 28,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    /*height: 50,
    width: 1000,
    top:-372,*/
  },
  title:{
    color: "black",
    fontSize: 20,
    fontFamily: "josefinBold"
  },
  logout:{
    position:"absolute",
    right:10
  }
})