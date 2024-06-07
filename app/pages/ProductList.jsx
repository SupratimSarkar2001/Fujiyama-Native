import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const ProductList = ({route}) => {
 const [allProducts, setAllProducts] = React.useState([]);
 const {category} = route.params;
 useEffect(() => {
  fetch(`https://dummyjson.com/products/category/${category}`)
.then(res => res.json())
.then(data => setAllProducts(data.products));
 },[])

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={{ uri: `https://source.unsplash.com/300x200/?${category}&sig=${Math.floor(Math.random()*10)}` }} style={styles.productImage}/>
      <Text style={styles.productName} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.productDescription} numberOfLines={3}>{item.description}</Text>
      <Text style={styles.productPrice}>Rs.{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productList: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 0.5,
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
  },
});

export default ProductList;
