import { View, Text,Image } from 'react-native'
import React from 'react'

const BottomSlider = ({Title,img}) => {
  return (
    <View className=" flex items-center p-5">
        <Image style={{width: 400, height: 250, resizeMode: 'cover'}} className="rounded-lg" source={img}/>
      <Text className="absolute bottom-10 left-10 text-2xl font-bold">{Title}</Text>
    </View>
  )
}

export default BottomSlider