import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Categories from '../components/Categories';

const Home = ({}) => {

  return (
    <View style={styles.container}>
      <Categories  />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    
  }
})