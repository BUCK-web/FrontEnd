import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';


const TextBooksOrSolutions = ({item,Class}) => { 
  const navigation = useNavigation();


  const handleClassSelect = (types) => {
  navigation.navigate("Topics", { types,item,Class });
};

 
  return (
<View className="p-4">
      <Text className="text-xl font-bold mb-4">Select a TextBooks or Solutions</Text>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded mb-4"
        onPress={() => handleClassSelect("Textbooks")}
      >
        <Text className="text-white text-center text-lg">Textbooks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded"
        onPress={() => handleClassSelect("Solutions")}
      >
        <Text className="text-white text-center text-lg">Solutions</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextBooksOrSolutions