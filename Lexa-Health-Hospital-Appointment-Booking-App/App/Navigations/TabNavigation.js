import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Appointment from '../Screens/Appointment';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Homenavigation from './Homenavigation';
import Explores from '../Screens/Explores';
import Contact from '../Components/Home/Contact';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name='Home' component={Homenavigation}
      options={{
         tabBarIcon:({color,size})=>(
               <Ionicons name='home' color={color} size={size}/>
         )
      }}
      />
      <Tab.Screen name='Explore' component={Explores}
       options={{
        tabBarIcon:({color,size})=>(
              <FontAwesome name='search' color={color} size={size}/>
        )
     }}
      />
     
      <Tab.Screen name="Appointment" component={Appointment}
       options={{
        tabBarIcon:({color,size})=>(
              <Ionicons name='calendar' color={color} size={size}/>
        )
     }}
      />

<Tab.Screen name='Support' component={Contact}
       options={{
        tabBarIcon:({color,size})=>(
              <FontAwesome name='user-circle' color={color} size={size}/>
        )
     }}
      />
    </Tab.Navigator>
    
  )
}