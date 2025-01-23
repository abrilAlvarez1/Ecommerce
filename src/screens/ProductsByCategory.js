import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Search from '../components/Search'
import { useGetProductsQuery } from '../services/shop'

const ProductsByCategory = ({route}) => {

  const {item:category} = route.params
  const {data,isSuccess,isError,error,isLoading} = useGetProductsQuery(category)
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProducts(Object.values(data))
    }
  },[isSuccess,data])

  useEffect(()=>{
 
   if(isSuccess){
    setProducts(Object.values(data).filter(product => product.title.includes(keyword)))
   }

  },[keyword,isSuccess])

  if(isLoading) return <View><Text>cargando</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <View>
      <Search  onChangeKeyword ={(t)=> setKeyword(t)}/>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> (<ProductCard product={item}/>)}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container:{

  },
  text:{
    color: "white"
  }
})