import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, FlatList } from 'react-native';
import GlobalApi from '../../Services/GlobalApi';


const Slider = () => {
  const [sliderList, setSliderList]=useState([]);
  // const sliderList = [
  //   {
  //     id: 1,
  //     name: 'Slider 1',
  //     imageUrl: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Slider 2',
  //     imageUrl: 'https://daktarbhai.com/assets/img/ask_doctor.png',
  //   },
  // ];

  useEffect(() => {
    getSlider();
  }, [])

  const getSlider=()=>{
    GlobalApi.getSlider().then(resp=>{
      
      setSliderList(resp.data.data);
    
    })
    
  }

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{uri:item.attributes.Image.data.attributes.url}}
            style={{
              width: Dimensions.get('screen').width * 0.9,
              height: 170,
              margin:2
            }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
