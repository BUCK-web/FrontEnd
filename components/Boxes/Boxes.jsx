import { View, Text, Image } from "react-native";
import React from "react";

const Boxes = ({ name, img }) => {
  return (
    <View className="h-[120px] w-[100px] bg-gray-400 rounded-[10px] m-2 flex items-center justify-center">
      <Image source={img} className="w-10 h-10 mb-2" />
      <Text className="text-center">{name}</Text>
    </View>
  );
};

export default Boxes;
