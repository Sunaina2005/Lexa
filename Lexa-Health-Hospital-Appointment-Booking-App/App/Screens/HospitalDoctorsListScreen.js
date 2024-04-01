import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import DoctorListBig from '../Components/HospitalDoctorsScreen/DoctorListBig';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../../assets/Shared/Colors';

export default function HospitalDoctorsListScreen() {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorList, setDoctorList] = useState([]); // Add this line for doctorList
  const param = useRoute().params;
  const [activeTab, setActiveTab] = useState('Hospital');

  useEffect(() => {
    getHospitalsByCategory();
    // Fetch doctorList as well
    getDoctorsByCategory();
  }, []);

  const getHospitalsByCategory = () => {
    GlobalApi.getHospitalsByCategory(param?.categoryName).then((resp) => {
      setHospitalList(resp.data.data);
    });
  };

  const getDoctorsByCategory = () => {
    // Assuming there's a method in GlobalApi for fetching doctors similar to getHospitalsByCategory
    GlobalApi.getDoctorsByCategory(param?.categoryName).then((resp) => {
      setDoctorList(resp.data.data);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

      {!hospitalList?.length ? (
        <ActivityIndicator size={'large'} color={Colors.PRIMARY} style={{ marginTop: '50%' }} />
      ) : activeTab === 'Hospital' ? (
        <HospitalListBig hospitalList={hospitalList} />
      ) : (
        <DoctorListBig doctorList={doctorList} />
      )}
    </View>
  );
}
