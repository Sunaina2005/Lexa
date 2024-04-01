// PremiumHospital.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import SubHeading from './SubHeading';
import GlobalApi from '../../Services/GlobalApi';
import HospitalItem from './HospitalItem';
import { useNavigation } from '@react-navigation/native';

export default function PremiumHospital() {
  const [hospitalList, setHospitalList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getPremiumHospitals();
  }, []);

  const getPremiumHospitals = () => {
    GlobalApi.getPremiumHospitals().then((resp) => {
      setHospitalList(resp.data.data);
    });
  };

  return (
    <View style={{ margin: 10 }}>
      <SubHeading subHeadingTitle={'Our Premium Hospitals'} />
      <FlatList
        data={hospitalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('hospital-detail', {
                hospital: item,
              })
            }>
            <HospitalItem hospital={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
