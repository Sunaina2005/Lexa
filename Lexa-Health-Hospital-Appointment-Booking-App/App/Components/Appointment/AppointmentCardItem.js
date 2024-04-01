import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../../../assets/Shared/Colors';
import HorizontalLine from '../Shared/HorizontalLine';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

export default function AppointmentCardItem({ appointment }) {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: 15,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'appfont-semi',
          marginTop: 10,
        }}>
        {moment(appointment.attributes.Date).format('MMM Do, YYYY')} - {appointment.attributes.Time}
      </Text>
      <HorizontalLine />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Image source={{ uri: 'https://ctcatlanta.com/wp-content/uploads/2015/01/Fake-Doctor.jpg' }} style={{ width: 90, height: 100, borderRadius: 10 }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, fontFamily: 'appfont-semi' }}>{appointment.attributes.hospitals.data[0].attributes.Name}</Text>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
            <Ionicons name="location" size={20} color={Colors.PRIMARY} />
            <Text style={{ fontFamily: 'appfont', color: Colors.GRAY }}>
              {appointment.attributes.hospitals.data[0].attributes.Address}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
            <Ionicons name="document-text" size={20} color={Colors.PRIMARY} />
            <Text style={{ fontFamily: 'appfont', color: Colors.GRAY }}>Booking Id: #{appointment.id}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
