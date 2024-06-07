import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Haptics from 'expo-haptics'
const ContactForm = ({clearForm}) => {
 const[name, setName] = useState()
 const[email, setEmail] = useState()
 const[message, setMessage] = useState()

 useEffect(() => {
  setName('')
  setEmail('')
  setMessage('')
 },[clearForm])
 return (
  <View style={styles.container}>
   <Text style={styles.headingText}>Contact Us Here!</Text>
   <View>
    <Text  style={styles.formHeading}>Enter Your Name</Text>
    <TextInput placeholder='Supratim'  style={styles.formInput} value={name} onChange={(event) => setName(event.nativeEvent.text)} maxLength={20}></TextInput>
   </View>
   <View>
    <Text style={styles.formHeading}>Enter Your Email</Text>
    <TextInput placeholder='supratim@example.com ' style={styles.formInput} value={email} onChange={(event) => setEmail(event.nativeEvent.text)} maxLength={40}></TextInput>
   </View>
   <View>
    <Text style={styles.formHeading}>Enter Your Message</Text>
    <TextInput placeholder='Hi! How are you doing??' style={styles.formInput}  value={message}  onChange={(event) => setMessage(event.nativeEvent.text)} multiline numberOfLines={4}></TextInput>
   </View>
   <Button title='Submit' color="#242526" onPress={() => {Alert.alert('Form Submitted', `Name: ${name}, Email: ${email}, Message: ${message}`); Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}}/>
  </View>
 )
}

export default ContactForm

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  // alignItems: 'center',
  marginHorizontal: 8,
  marginVertical: 10,
 },
 headingText: {
  fontSize: 22,
  fontWeight: 'bold',
  // marginHorizontal: 8,
  marginVertical: 10,
 },
 formHeading: {
  fontSize: 14,
  fontWeight: 'bold',
  marginHorizontal: 8
 },
 formInput: {
  // height: 40,
  marginHorizontal: 8,
  marginVertical: 10,
  borderWidth: 1,
  padding: 10,
  borderRadius: 10
 }
})