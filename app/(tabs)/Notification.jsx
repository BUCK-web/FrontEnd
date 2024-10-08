import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Boxes2 from "../../components/Boxes/Boxes2";


const Notification = () => {
  return (
      <SafeAreaView className="p-5 bg-[#FFF9F9] h-screen">
        <View >
          <Text className="text-4xl font-bold">Notification</Text>
        </View>
        <ScrollView className="mt-10">
          <Boxes2 />
          <Boxes2 />
          <Boxes2 />
          <Boxes2 />
        </ScrollView>
      </SafeAreaView>
  );
};

export default Notification;
