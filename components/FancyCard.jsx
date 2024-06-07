import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics';

const FancyCard = () => {
 const handleExplore = () => {
  Linking.openURL('https://www.google.com')
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
 }
  return (
    <>
    <Text style={styles.headingText}>Our Motto</Text>
    <View style={styles.container}>
      <View style={styles.mottoCard}>
       <Image
       source={{ uri: 'https://images.pexels.com/photos/6153367/pexels-photo-6153367.jpeg?auto=compress&cs=tinysrgb&w=600'}}
       style={styles.cardImage}
       />
       <Text style={styles.cardText}>"Every Step, a Story; Every Shoe, a Journey. Walk with Confidence, Step into Possibility."</Text>
       <TouchableOpacity onPress={handleExplore}>
          <Text style={styles.ExploreButton}>Explore</Text>
       </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default FancyCard

const styles = StyleSheet.create({
 container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 headingText: {
  fontSize: 22,
  fontWeight: 'bold',
  marginHorizontal: 8,
  marginVertical: 10,
 },
 mottoCard: {
  width: 360,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 8,
  marginVertical: 10,
  borderColor: 'black',
  borderWidth: 1,
  borderTopWidth:0
 },
cardImage: {
  width: 360,
  height: 200
 },
 cardText:{
  fontSize: 14,
  textAlign: 'center',
  marginTop: 10,
  marginBottom:10
 },
 ExploreButton:{
  backgroundColor: '#242526',
  color: 'white',
  padding: 10,
  borderRadius: 5,
  fontSize: 16,
  fontWeight: 'bold',
  margin: 5
 }
})
