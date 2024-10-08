import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View className=" p-10">
        <Image className="w-[70px] h-[70px] mt-5" source={require('../../assets/images-removebg-preview.png')} />
      <Text>Indian School Ibra No Rights Recived </Text>
      <View>
        <Text>© 2023 Indian School Ibra</Text>
      </View>
      <View>
        <Text>
            Contact Us:
        </Text>
        <Text className="font-bold">
            IndianSchoolIbra@gmail.com
        </Text>
      </View>
    </View>
  )
}

export default Footer