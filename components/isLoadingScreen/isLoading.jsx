import { View, Text, Image } from "react-native";
import React from "react";
// import LottieView from 'lottie-react-native';

const IsLoading = () => {
  return (
    <View className="h-[60vh] w-[80vw] bg-[#ededed] rounded-[20px] flex items-center justify-center">
      <Image source={require("../../assets/Group 90.png")} />
      <Text className="text-2xl mt-4 font-bold text-[#DB8606]">
        SignUp Successful
      </Text>
      <Text className="w-40 text-center mt-5 text-md">
        Your account has been created successfully, please wait...
      </Text>
      {/* <LottieView
        source={require('../../assets/loader.json')} // Replace with your Lottie JSON file
        autoPlay
        loop
        style={{ width: 100, height: 100, marginTop: 20 }}
      /> */}
    </View>
  );
};

export default IsLoading;
