import { View, Text,StyleSheet, Dimensions, Animated } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const Dots = ({ data, scrollX }) => {
  return (
    <View className="flex flex-row items-center justify-center p-5 gap-2">
      {data.map((_, Indx) => {
        const inputRange = [
          (Indx - 1) * width,
          Indx * width,
          (Indx + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });
        return (
            <Animated.View key={Indx.toString()} style={[styles.dot, { width: dotWidth }]} />
        );
      })}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
  dotActive: {
    backgroundColor: "#000",
  },
});
