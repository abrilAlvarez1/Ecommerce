import { FlatList, StyleSheet, Text, View } from 'react-native'
import {useGetOrdersUserQuery} from "../services/orders"
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import EmptyList from "../components/EmptyList"

const Orders = () => {
 
  const localId = useSelector(state => state.user.localId)
  const {data:orders} = useGetOrdersUserQuery({localId})

  if(!orders) return <EmptyList message="No hay ordenes"/>

  return (
    <View>
      <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={({item}) => <OrderItem order={item}/>}/>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})