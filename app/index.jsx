import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


const Index = () => {
  const handleNavigate = () => {
    router.replace("/SignIn");
  };

  return (
    <ScrollView>
      <SafeAreaView className="bg-[#FFF9F9] h-screen flex items-center justify-center">
        <Image
          source={require("../assets/images-removebg-preview.png")}
          className="w-[150px] h-[150px]"
        />
        <View className="w-[300px] flex items-center">
          <Text className="text-4xl font-bold text-center ">Welcome {"\n"} To {"\n"}Indian School Ibra Study Hub</Text>
          <Text className="text-center m-4">
          Your gateway to academic excellence. Explore, learn, and grow with a variety of study resources.
          </Text>
        </View>
        <Image source={require("../assets/Books.png")} className="m-5" />
        <View className="w-[300px] mt-5">
          <Text className="text-center">
          Discover a world of learning materials, courses, and interactive quizzes to help you succeed in your studies. Join now to start your journey toward academic success!

          </Text>
        </View>
        <TouchableOpacity
          className="bg-[#DB8606] w-[300px] h-[60px] rounded-md mt-[100px] flex items-center justify-center"
          onPress={handleNavigate}
        >
          <Text className="font-bold text-white text-xl">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Index;
