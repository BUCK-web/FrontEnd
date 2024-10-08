import { View, Text,Image , StyleSheet } from 'react-native'
import React from 'react'

const ImagesDisplay = ({title,img}) => {
  return (
    <View className="mr-5 ml-10">
        <Image source={img} style={styles.image} />
        <Text className="text-center mt-2" >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 80 ,// Explicit width for image
        height: 80 ,// Explicit height for image
        resizeMode: 'cover', // Ensure the image covers the space while maintaining aspect ratio
      },
})

export default ImagesDisplay