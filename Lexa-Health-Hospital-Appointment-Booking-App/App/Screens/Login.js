import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SignInWithOAuth from '../Components/SignInWithOAuth';

const app = require('../../assets/app.jpg'); // Update the path accordingly
const googleLogo = require('../../assets/googleLogo.jpg'); // Update the path accordingly

export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Image source={app} style={styles.appImage} />
      <View style={styles.container}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={styles.description}>
          Book Appointments Effortlessly and manage your health journey
        </Text>
        <View style={styles.googleContainer}>
          <Image source={googleLogo} style={styles.googleLogo} />
          <SignInWithOAuth/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: Dimensions.get('screen').width,
    height: 450,
    resizeMode: 'cover',
    marginTop: 50,
  },
  container: {
    backgroundColor: '#fff',
    padding: 25,
    alignItems: 'center',
    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,
   
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    marginTop: 20,
  },
  googleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  button: {
    padding: 16,
    backgroundColor: '#3498db', // Use your primary color or Colors.PRIMARY
    borderRadius: 90,
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
  },
});
