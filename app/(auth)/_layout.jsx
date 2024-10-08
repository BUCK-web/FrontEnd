import { View, Text } from 'react-native'
import React from 'react'
import { Stack,router } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons'; 

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{title: '',headerLeft: () => (<Icon name="arrow-back" size={24} color="#DB8606" style={{ marginRight: 10 }} onPress={() => router.back()} />)  , headerStyle: {
            backgroundColor: '#FFF9F9',
          }, }}  />
    </Stack>
  )
}

export default _layout