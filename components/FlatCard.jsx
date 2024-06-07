import { StyleSheet, View, Text, ScrollView, TouchableOpacity, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';

const FlatCard = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Text style={styles.headingText}>Categories</Text>
      <ScrollView horizontal>
        <TouchableOpacity onPress={
          () => { 
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            navigate.navigate('ProductList',{
              category: 'mens-shoes'
            }
            )
          }
        }>
          <View style={[styles.card, styles.cardOne]}>
            <MaterialCommunityIcons name="shoe-cleat" size={28} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Shoes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={
          () => { 
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            navigate.navigate('ProductList',{
              category: 'mens-shirts'
            }
            )
          }
        }>
          <View style={[styles.card, styles.cardTwo]}>
            <MaterialCommunityIcons name="tshirt-crew" size={28} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Shirts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={
          () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            navigate.navigate('ProductList',{
              category: 'womens-bags'
            }
            )
          }
        }>
          <View style={[styles.card, styles.cardThree]}>
            <MaterialIcons name="shopping-bag" size={28} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Bags</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={
          () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            navigate.navigate('ProductList',{
              category: 'mens-watches'
            }
            )
          }
        }>
          <View style={[styles.card, styles.cardFour]}>
            <MaterialCommunityIcons name="watch" size={28} color="black" />
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Watches</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginVertical: 10
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 4, // make the cards elevated
  },
  cardOne: {
    backgroundColor: '#bed9dd',
  }
  , cardTwo: {
    backgroundColor: '#eeeeee'
  }
  , cardThree: {
    backgroundColor: '#b7b7b7'
  }
  , cardFour: {
    backgroundColor: 'pink'
  }
})
export default FlatCard