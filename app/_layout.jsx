import React from "react";
import { router, Stack } from "expo-router";
import Details from './Details';
import Icon from 'react-native-vector-icons/Ionicons';


const AppLayout = () => {
  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="Details" options={{headerShown : true , headerTitle :  "" , headerLeft : ()=> (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back() } />)}}/>
        <Stack.Screen name="Class11" options={{headerShown : true , headerTitle :  "" , headerLeft : ()=> (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back() } />)}}/>
        <Stack.Screen name="Class12" options={{headerShown : true , headerTitle :  "" , headerLeft : ()=> (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back() } />)}}/>
        <Stack.Screen name="Topics" options={{headerShown : true , headerTitle :  "" , headerLeft : ()=> (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back() } />)}}/>
        <Stack.Screen name="Science" options={{headerShown : true , headerTitle :  "" , headerLeft : ()=> (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back() } />)}}/>
      </Stack>
  );
};

export default AppLayout;
