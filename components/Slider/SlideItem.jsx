import { View, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ id, Img }) => {
  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.image} />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width, // Full screen width
    height: 300, // Set a fixed height for the container
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400, // Explicit width for image
    height: 400, // Explicit height for image
    resizeMode: 'cover', // Ensure the image covers the space while maintaining aspect ratio
  },
});
