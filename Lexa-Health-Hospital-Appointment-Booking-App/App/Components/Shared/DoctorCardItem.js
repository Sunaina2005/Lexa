import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function DoctorCardItem({ doctor }) {
  return (
    <View style={{ marginBottom: 20, backgroundColor: Colors.white, borderRadius: 10, overflow: 'hidden', flexDirection: 'row' }}>
      <View style={{ padding: 10, flex: 1 }}>
        {/* Square Image */}
        <Image
          source={{ uri: doctor.attributes.Image.data.attributes.url }}
          style={{
            width: 100,
            height: 160,
            borderRadius: 10,
            marginRight: 10,
          }}
        />
      </View>

      <View style={{ flex: 2, padding: 10 }}>
        {/* Professional Doctor Heading */}
        <View style={{ alignItems: 'center', backgroundColor: Colors.lightBlue, borderRadius: 10, padding: 3, marginBottom: 8 }}>
        <Ionicons name="checkmark-circle" size={15} color="#0165fc"><Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily: 'appfont-bold' }}>Professional Doctor</Text></Ionicons>
        </View>

        {/* Doctor Name */}
        <Text style={{ fontSize: 18, fontFamily: 'appfont-semi' }}>{doctor.attributes.Name}</Text>

        {/* Category Name */}
        <Text style={{ color: Colors.GRAY, marginBottom: 8 }}>{doctor.attributes.categories.data[0].attributes.Name}</Text>

        {/* Stars, Reviews */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="star" size={20} color={Colors.PRIMARY} />
          <Ionicons name="star" size={20} color={Colors.PRIMARY} />
          <Ionicons name="star" size={20} color={Colors.PRIMARY} />
          <Ionicons name="star" size={20} color={Colors.PRIMARY} />
          <Text style={{ marginLeft: 5, fontSize: 16 }}>{doctor.attributes.rating || '4.8'}</Text>
          <Text style={{ marginLeft: 5, color: Colors.GRAY }}>{doctor.attributes.reviews || '49'} Reviews</Text>
        </View>

        {/* Make Appointment Button */}
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: Colors.Blue, padding: 10, borderRadius: 10, marginTop: 10, width:'100%' }}>
          <Text style={{ color: Colors.white }}>Make Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
