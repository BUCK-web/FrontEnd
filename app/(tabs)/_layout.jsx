import React from "react";
import { View,Image,Text } from "react-native";
import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const TabsLayout = () => {
  const HeaderLeft = ({ iconName }) => (
    <TouchableOpacity style={{ marginLeft: 15 }}>
      <Icon name={iconName} size={24} color="#000" />
    </TouchableOpacity>
  );
  
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" options={{tabBarIcon: ({ color, size }) => (<Icon name="home" size={size} color={color} />)}} />
      <Tabs.Screen name="StudyMaterals" options={{tabBarIcon: ({ color, size }) => (<Icon name="book" size={size} color={color} />)}} />
      <Tabs.Screen name="Notification" options={{tabBarIcon: ({ color, size }) => (<Icon name="notifications" size={size} color={color} />)}} />
      <Tabs.Screen name="Profile" options={{tabBarIcon: ({ color, size }) => (<Icon name="person-circle-outline" size={size} color={color} />)}} />
    </Tabs>
  );
};

export default TabsLayout;