import { View, Text, FlatList, Animated, Dimensions } from "react-native";
import React, { useRef, useEffect } from "react";
import SlideItem from "./SlideItem";
import Dots from "./Dots";

const { width } = Dimensions.get("screen");

const Slider = () => {
  const SliderData = [
    {
      id: 1,
      Img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      Img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      Img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"),
      title: "Title 3",
      description: "Description 3",
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  const handleScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: { x: scrollX },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      currentIndex.current = viewableItems[0].index;
    }
  }).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Scroll to the next index
      let nextIndex = currentIndex.current + 1;

      // If it's the last item, go back to the first one
      if (nextIndex >= SliderData.length) {
        nextIndex = 0;
      }

      flatListRef.current.scrollToOffset({
        offset: nextIndex * width,
        animated: true,
      });

      currentIndex.current = nextIndex;
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <View>
      <FlatList
        data={SliderData}
        ref={flatListRef}
        renderItem={({ item }) => <SlideItem {...item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleScroll}
        onViewableItemsChanged={handleViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
      <Dots data={SliderData} scrollX={scrollX} />
    </View>
  );
};

export default Slider;
