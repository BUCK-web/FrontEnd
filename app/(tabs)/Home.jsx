import { View, Text, ScrollView } from "react-native";
import React from "react";
import Slider from "../../components/Slider/Slider";
import Courcel from "../../components/Courcel/Courcel";
import BottomSlider from "../../components/BottomSlider/BottomSlider";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
  const SilderData = [
    {
      Title: "Title 1",
      img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
    },
    {
      Title: "Title 1",
      img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
    },
    {
      Title: "Title 1",
      img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
    },
    {
      Title: "Title 1",
      img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
    },
  ];
  return (
    <ScrollView className="p-3">
      <SafeAreaView>
        <View>
          <Text className="text-2xl font-bold mt-10 ml-5 mb-4">
            Welcome JhoneDoe !
          </Text>
        </View>
        <View>
          <Slider />
        </View>
        <View>
          <Courcel />
        </View>
        <View>
          {SilderData.map((items, index) => {
            return (
              <BottomSlider Title={items.Title} img={items.img} key={index} />
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
