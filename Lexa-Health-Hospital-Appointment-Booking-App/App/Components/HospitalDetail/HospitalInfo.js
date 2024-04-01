import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import SubHeading from '../Home/SubHeading';
import HorizontalLine from '../Shared/HorizontalLine';

export default function HospitalInfo({hospital}) {
  return hospital&&(
    <View>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'appfont-semi'
      }}>{hospital.attributes.Name}</Text>

          <FlatList
           data={hospital.attributes.categories.data}
           horizontal={true}
         renderItem={({item})=>(
          <Text style={{marginRight:10,
         color:Colors.GRAY}}>{item.attributes.Name}</Text>
         )} />
         
         <HorizontalLine/>

          <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
          <Ionicons name="location" size={22} color={Colors.PRIMARY} />
          <Text style={{
            fontFamily:'appfont',
            color:Colors.GRAY,
            fontSize:16
          }}>{hospital.attributes.Address}</Text>
        </View>

        <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center', marginTop:6}}>
          <Ionicons name="time" size={22} color={Colors.PRIMARY} />
          <Text style={{
            fontFamily:'appfont',
            color:Colors.GRAY,
            fontSize:18
          }}>Mon Sun | 11 AM - 8 PM</Text>
        </View>

        <View style={{borderBottomWidth:1,
        borderColor:Colors.LIGHT_GRAY,margin:5,marginBottom:15, marginTop:10}}>
          </View> 
        <ActionButton />

        <View style={{borderBottomWidth:1,
        borderColor:Colors.LIGHT_GRAY,margin:5,marginBottom:15, marginTop:10}}>
          </View> 

          <SubHeading subHeadingTitle={'About'}/>
          <Text>{hospital.attributes.Description[0].children[0].text}</Text>
    </View>
  )
}