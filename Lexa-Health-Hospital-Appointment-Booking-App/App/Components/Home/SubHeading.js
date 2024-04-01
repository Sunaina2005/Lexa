import { View, Text, TouchableOpacity  } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import { useNavigation } from '@react-navigation/native';

export default function SubHeading({ subHeadingTitle, seeAll=true }) {
  const navigation = useNavigation();
  return (
    <View>
       <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        marginTop:10
    }}>
        <Text style={{
            fontSize: 20,
            fontFamily: 'appfont-semi'
        }}>{subHeadingTitle}</Text>
          <TouchableOpacity  onPress={() =>
              navigation.navigate('Explore'
              )
            }>
        {seeAll? <Text style={{
            fontFamily: 'appfont',
            color: Colors.PRIMARY
        }}>See All</Text>:null}
        </TouchableOpacity>
    </View>
    </View>
  )
}
