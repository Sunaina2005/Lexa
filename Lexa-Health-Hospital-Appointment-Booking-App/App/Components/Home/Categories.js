import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi';
import Colors from '../../../assets/Shared/Colors';
import SubHeading from './SubHeading';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {

    const navigation= useNavigation();
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategories();
    }, [])
    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            setCategoryList(resp.data.data);

        })
    }

    if (!categoryList) {
        return null;
    }
    return (
        <View style={{ marginTop: 10 }}>
            <SubHeading subHeadingTitle={'Doctor Speciality'} seeAll={false}/>

            <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>index<6&&(
                <TouchableOpacity 
                onPress={()=>navigation.navigate('hospital-doctor-list-screen',
                {
                    categoryName:item.attributes.Name
                })}
                style={{alignItems:'center'}}>
                    <View style={{
                        backgroundColor:Colors.SECONDARY,
                        padding:15,
                        borderRadius:99,
                        margin:10,
                    }}>
                        <Image 
                        source={{
                            uri:item.attributes.Icon.data.attributes.url
                            }} 
                            style={{width:30,height:30}}/>
                    </View>
                    <Text>{item.attributes.Name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}