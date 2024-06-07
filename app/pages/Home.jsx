import { View, Text, ScrollView, RefreshControl, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCard from "../../components/FlatCard"
import ElevatedCard from "../../components/ElevatedCard"
import FancyCard from "../../components/FancyCard"
import ContactForm from "../../components/ContactForm"
import TestimonialCard from "../../components/TestimonialCard"
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
 const [refreshing, setRefreshing] = React.useState(false);
 const [clearForm, setClearForm] = React.useState(false);
 const navigation = useNavigation();

 const onRefresh = React.useCallback(() => {
   setRefreshing(true);
   setTimeout(() => {
     setRefreshing(false);
     setClearForm(true)
   }, 1000);
 }, []);

 const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  } catch (error) {
    console.error('Error removing data: ', error);
  }
};
 return (
   <SafeAreaView>
     <ScrollView
             refreshControl={
               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
             }
     >
       <View style={styles.headingContainer}>
       <Text style={{fontSize:28,fontWeight:'bold',marginHorizontal:8,marginVertical:5, color:'#e05f02'}}>Fujiyama ⛰️</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>{
        handleLogout()
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
      }}>
        <Text style={{color: 'white', padding: 5}}>
        <MaterialIcons name="logout" size={16} color="white" />
        </Text>
      </TouchableOpacity>
      </View>  
       <FlatCard />
       <ElevatedCard />
       <FancyCard />
       <ContactForm clearForm={clearForm}/>
       <TestimonialCard />
       <Text style={{fontSize: 12, justifyContent: "center", alignItems: "center", marginBottom: 10, textAlign: "center"}}>Copyrights ~ Fujiyama@2024</Text>
     </ScrollView>
   </SafeAreaView>
 )
}

export default Home

const styles = StyleSheet.create({
  logoutButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor:"#252526",
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10
  },
})