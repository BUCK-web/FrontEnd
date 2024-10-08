import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="p-2 bg-[#FFF9F9]">
      <ScrollView>
        <View className="mt-10 mb-5 p-2 flex flex-row items-center">
          <Image
            source={require("../../assets/download.jpeg")}
            className="rounded-full h-[100px] w-[100px] mr-[100px]"
          />
          <View className="flex-1">
            <Text className="text-lg font-bold">John Doe</Text>
            <Text className="text-lg font-bold">JohnDoe@gmail.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
