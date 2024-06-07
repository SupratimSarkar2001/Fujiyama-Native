import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics'

const Details = ({ route }) => {
  const { name, imageUrl, description } = route.params;
  const navigate = useNavigation();
  const [orderd, setOrderd] = React.useState(true);

  if(!orderd) return (
   <View style={styles.ordercontainer}>
    <ActivityIndicator 
     size={"large"} 
     accessibilityHint='Please wait'/>
     <Text style={styles.ordertext}>Please wait! Your order is being processed</Text>
   </View>
  )
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button 
        color="#242526"
        onPress={()=>{
         setOrderd(false)
         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
         setTimeout(() => {
          setOrderd(true)
          navigate.reset(
           {
             index: 0,
             routes: [
               { name: 'Home' },
             ],
           }
          )
         },2000)}}
        title="Apply for Pre-order"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#e05f02',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  ordercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ordertext: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#e05f02',
    marginTop: 20
  },
});

export default Details;
