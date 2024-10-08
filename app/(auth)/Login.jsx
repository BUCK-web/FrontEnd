import { View, Text, TouchableOpacity, Alert,TextInput   } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

// Custom FormField component
const FormField = ({ label, icon, ...props }) => (
  <View className="mt-4">
    <Text className="text-[#DB8606] font-bold text-[14px]">{label}</Text>
    <View className="bg-[#F1F1F1] rounded-sm flex-row items-center p-2 h-[50px] mt-2">
      <TextInput className="flex-1" {...props} />
      {icon && <Ionicons name={icon} size={20} color="#DB8606" />}
    </View>
  </View>
);

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long");
      return;
    }

    console.log("Form data:", formData);
    Alert.alert("Success", "Sign up successful!");
    // router.push("/home"); // Uncomment to navigate to home screen
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFF9F9" }}
      className="flex-1 p-10  justify-center"
    >
      <View>
        <Text className="text-4xl font-bold">Login</Text>
      </View>
      <FormField
        label="Email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        icon="mail"
      />  

      <FormField
        label="Password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
        icon="lock-closed"
      />

      <TouchableOpacity
        className="flex items-center justify-center bg-[#DB8606] h-[60px] mt-10 rounded-lg"
        onPress={handleSignUp}
      >
        <Text className="font-bold text-lg text-white">Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;



