import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Clases = ({ setClass, Class, item, type }) => {
  const navigation = useNavigation();
  const handleClassSelect = (className) => {
    setClass(className);
    if (className == "Class11") {
        navigation.navigate("Class11", { item, type });
    }else{
        navigation.navigate("Class12", { item, type });
    }
  };

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold mb-4">Select a Class</Text>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded mb-4"
        onPress={() => handleClassSelect("Class11")}
      >
        <Text className="text-white text-center text-lg">Class 11</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded"
        onPress={() => handleClassSelect("Class12")}
      >
        <Text className="text-white text-center text-lg">Class 12</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Clases;
