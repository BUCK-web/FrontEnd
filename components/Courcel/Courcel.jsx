import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ImagesDisplay from './Image'

const Courcel = () => {
    const data = [
        {
          title: "Course 1",
          img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
          title: "Course 2",
          img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
          title: "Course 3",
          img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
            title: "Course 4",
            img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
            title: "Course 5",
            img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
            title: "Course 6",
            img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        },
        {
            title: "Course 7",
            img : require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg")
        }
      ]
  return (
    <View>
        <FlatList data={data} renderItem={({item}) =><ImagesDisplay {...item}  />  } horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default Courcel