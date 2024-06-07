import React from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native'; 


const ElevatedCard = () => {
 const navigate = useNavigation();
 return (
  <View>
   <Text style={styles.headingText}>Trending</Text>
   <ScrollView horizontal>
    <Pressable style={[styles.card]} onPress={() => {
     navigate.navigate('Details',{
      name: 'Classic 1',
      imageUrl: 'https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic 1 is a beautiful and elegant design that will make you fall in love with it. Add it to your cart. Payment is easy. Keep trust in us.'
     })
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
     }}>
     <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600' }}
      style={styles.cardImage}
      resizeMode="cover">
      <Text style={styles.cardText}>Classic 1</Text>
     </ImageBackground>
    </Pressable>
    <Pressable style={[styles.card]}  onPress={() => {
     navigate.navigate('Details',{
      name: 'Classic 2', 
      imageUrl: 'https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic 2 is a beautiful and elegant design that will make you fall in love with it.Add it to your cart. Payment is easy. Keep trust in us.'
     })
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
     }}>
     <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=600' }}
      style={styles.cardImage}
      resizeMode="cover">
      <Text style={styles.cardText}>Classic 2</Text>
     </ImageBackground>
    </Pressable>
    <Pressable style={[styles.card]} onPress={() => {
     navigate.navigate('Details',{
      name: 'Classic 3', 
      imageUrl: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic 3 is a beautiful and elegant design that will make you fall in love with it.Add it to your cart. Payment is easy. Keep trust in us.'
     })
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
     }}>
     <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600' }}
      style={styles.cardImage}
      resizeMode="cover">
      <Text style={styles.cardText}>Classic 3</Text>
     </ImageBackground>
    </Pressable>
    <Pressable style={[styles.card]} onPress={() => {
     navigate.navigate('Details',{
      name: 'Classic 4', 
      imageUrl: 'https://images.pexels.com/photos/1619655/pexels-photo-1619655.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic 4 is a beautiful and elegant design that will make you fall in love with it.Add it to your cart. Payment is easy. Keep trust in us.'
     })
     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
     <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/1619655/pexels-photo-1619655.jpeg?auto=compress&cs=tinysrgb&w=600' }}
      style={styles.cardImage}
      resizeMode="cover">
      <Text style={styles.cardText}>Classic 4</Text>
     </ImageBackground>
    </Pressable>
   </ScrollView>
  </View>
 );
};

const styles = StyleSheet.create({
 headingText: {
  fontSize: 22,
  fontWeight: 'bold',
  marginHorizontal: 8,
  marginVertical: 10,
 },
 card: {
  width: 100,
  height: 100,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 8,
  marginVertical: 10,
  borderRadius: 10,
 },
 cardImage: {
  width: '100%',
  height: '100%',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: 10
 },
 cardText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
 },
});

export default ElevatedCard;
