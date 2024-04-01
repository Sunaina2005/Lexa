import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import DoctorListBig from '../Components/HospitalDoctorsScreen/DoctorListBig';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../../assets/Shared/Colors';


export default function Explores() {

    const [hospitalList, setHospitalList] = useState([]);
    const [doctorList, setDoctorList] = useState([]); 
    const [activeTab, setActiveTab] = useState('Hospital');

    useEffect(() => {
        activeTab=='Hospital'?
        getAllHospital():
        getAllDoctors();
      }, [activeTab]);
    
      const getAllHospital = () => {
        GlobalApi.getAllHospital().then((resp) => {
          setHospitalList(resp.data.data);
        });
      };
    
      const getAllDoctors = () => {
        // Assuming there's a method in GlobalApi for fetching doctors similar to getHospitalsByCategory
        GlobalApi.getAllDoctors().then((resp) => {
          setDoctorList(resp.data.data);
        });
      };
    
  return (
    <ScrollView style={{ flex: 1, padding: 20, marginTop: 20 }}>
      <Text style={{
        fontSize:26,
        fontFamily:'appfont-semi'
      }}>Explore</Text>
       <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

       {!hospitalList?.length ? (
        <ActivityIndicator size={'large'} color={Colors.PRIMARY} style={{ marginTop: '50%' }} />
      ) : activeTab === 'Hospital' ? (
        <HospitalListBig hospitalList={hospitalList} />
      ) : (
        <DoctorListBig doctorList={doctorList} />
      )}
    </ScrollView>
  )
}