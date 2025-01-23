import { StyleSheet, FlatList } from 'react-native'
import CategoriesItemCard from './CategoriesItemCard';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../services/shop';

const Categories = ({}) => {

  const {data:categories} = useGetCategoriesQuery()

  return (
 
    <FlatList
      data={categories} // saco de la bd en categories.json
      keyExtractor={item => item} // cada item es un valor de mis categias
      renderItem={({item}) => <CategoriesItemCard item={item}/>}// por cada item de mis categorias lo renderizo (muestro) en un componente itemcard
    />

  )
}

export default Categories

const styles = StyleSheet.create({})