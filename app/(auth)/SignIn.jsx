import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import IsLoading from '../../components/isLoadingScreen/isLoading'; // Assume this is the loading component

// Custom FormField component with error display
const FormField = ({ label, icon, error, ...props }) => (
  <View className="mt-4 ">
    <Text className="text-[#DB8606] font-bold text-[14px]">{label}</Text>
    <View className="bg-[#F1F1F1] rounded-sm flex-row items-center h-[50px] mt-2">
      <TextInput className="flex-1  p-2 rounded-sm" {...props} />
      {icon && <Ionicons name={icon} size={20} color="#DB8606" />}
    </View>
    {error ? <Text className="text-red-500 text-[12px] mt-1 text-right">{error}</Text> : null}
  </View>
);

const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [MainErrs, setMainErrs] = useState("");

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const saveUserData = async () => {
    const { firstName, lastName, email, password } = formData;
    try {
      const response = await fetch("http://192.168.1.110:5000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      const data = await response.json();
      if (data.success) {
        router.replace("/Home");
      } else {
        throw new Error(data.message || "An error occurred during sign up");
      }
    } catch (error) {
      setMainErrs(error.message);
    }
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        await saveUserData();
      } catch (error) {
        console.error("Sign up failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: '#fafff9' }} className="flex-1 p-10 h-screen justify-center relative">
        {/* Loading Overlay */}
        {isLoading && (
          <View className="absolute inset-0 items-center justify-center z-10 h-screen w-screen bg-[#ffffffd9]">
            <IsLoading />
          </View>
        )}

        {/* Form Content */}
        <View className="z-0">
          <Text className="text-4xl font-bold">Sign Up</Text>
          {MainErrs ? <Text className="text-red-500 text-[12px] mt-5">{MainErrs}</Text> : null}
        </View>

        <FormField
          label="First Name"
          value={formData.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
          error={errors.firstName}
        />

        <FormField
          label="Last Name"
          value={formData.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
          error={errors.lastName}
        />

        <FormField
          label="Email"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
          error={errors.email}
        />

        <FormField
          label="Password"
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
          icon="lock-closed"
          error={errors.password}
        />

        <FormField
          label="Confirm Password"
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          secureTextEntry
          icon="lock-closed"
          error={errors.confirmPassword}
        />

        <TouchableOpacity
          className={`flex items-center justify-center bg-[#DB8606] h-[60px] mt-10 rounded-lg ${isLoading ? 'opacity-50' : ''}`}
          onPress={handleSignUp}
          disabled={isLoading}
        >
          <Text className="font-bold text-lg text-white">{isLoading ? 'Signing Up...' : 'Sign Up'}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-[40px]" onPress={() => router.push('/Home')}>
          <View className="flex flex-row items-center justify-center gap-1">
            <Text className="font-bold text-[14px]">Already have an account?</Text>
            <Text className="text-[#DB8606] font-bold text-[14px]">Login</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;
