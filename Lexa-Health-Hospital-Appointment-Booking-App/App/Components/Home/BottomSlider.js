import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, FlatList } from 'react-native';
// import GlobalApi from '../../Services/GlobalApi';

const BottomSlider = () => {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider().then(resp => {
      const reversedSliderList = resp.data.data.reverse();
      setSliderList(reversedSliderList);
    });
  };

  return (
    <View style={{ marginTop: 2 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={{
              width: Dimensions.get('screen').width * 0.9,
              height: 170,
              margin: 2,
            }}
          />
        )}
      />
    </View>
  );
};

export default BottomSlider;
