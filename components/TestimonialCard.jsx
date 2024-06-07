import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TestimonialCard = () => {
 return (
  <View>
   <Text style={styles.headingText}>Testimonials</Text>
   <View style={styles.testimonialCard}>
    <View style={styles.testimonials}>
     <Image source={{ uri: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.profileImage} />
     <View>
      <Text style={styles.profileHeading}>Kiran Sindi</Text>
      <Text style={styles.profileComments}>Best seller 😉
       😌</Text>
     </View>
    </View>
    <View style={styles.testimonials}>
     <Image source={{ uri: 'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600' }} style={styles.profileImage} />
     <View>
      <Text style={styles.profileHeading}>Sagar Rajish</Text>
      <Text style={styles.profileComments}>Outstanding Products 👟
       🥾</Text>
     </View>
    </View>
   </View>
  </View>
 )
}

export default TestimonialCard

const styles = StyleSheet.create({
 headingText: {
  fontSize: 22,
  fontWeight: 'bold',
  marginHorizontal: 8,
  marginVertical: 10,
 },
 testimonialCard: {
  flex: 1,
  marginHorizontal: 8,
  backgroundColor: '#e3e3e3',
  borderRadius: 10,
  padding: 10,
  gap: 5,
  marginBottom: 10
 },
 testimonials: {
  flexDirection: 'row',
  gap: 15,
  alignItems: 'center'
 },
 profileImage: {
  width: 50,
  height: 50,
  borderRadius: 50
 },
 profileHeading: {
  fontSize: 16,
  fontWeight: 'bold'
 },
 profileComments: {
  fontSize: 14
 }
})