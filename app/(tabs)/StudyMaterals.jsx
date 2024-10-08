import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Boxes from "../../components/Boxes/Boxes";
import { useNavigation } from "@react-navigation/native";

const StudyMaterials = () => {
  const navigation = useNavigation();
  
  const subjects = [
    { id: 1, name: "English", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
    { id: 2, name: "Maths", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
    { id: 3, name: "Science", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
    { id: 4, name: "Commerce", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
    { id: 5, name: "Physical Education", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
    { id: 6, name: "Computer", img: require("../../assets/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg") },
  ];

  const subjectsNotes = subjects.map(subject => ({
    ...subject,
    name: `${subject.name} \n Notes`,
  }));

  const subjectQuizzes = subjects.map(subject => ({
    ...subject,
    name: `${subject.name} \n Quizzes`,
  }));

  const handlePage = (item, type) => {
    navigation.navigate("Details", { item, type });
  };

  return (
    <ScrollView>
      <SafeAreaView className="p-5 bg-[#FFF9F9] h-full">
        <View className="mb-10">
          <Text className="text-4xl font-bold">Study Materials</Text>
        </View>
        
        <View className="flex items-center">
          {/* NCERT Books & Solutions */}
          <View>
            <Text className="mb-3 ml-3 font-bold text-[15px]">NCERT Books & Solutions</Text>
            <View className="flex-row flex-wrap mt-5 justify-center">
              {subjects.map(subject => (
                <TouchableOpacity onPress={() => handlePage(subject, 'subject')} key={subject.id}>
                  <Boxes name={subject.name} img={subject.img} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Short Notes */}
          <View className="mt-10">
            <Text className="text-[15px] font-bold mb-3 ml-3">Short Notes</Text>
            <View className="flex-row flex-wrap mt-5 justify-center">
              {subjectsNotes.map(subject => (
                <TouchableOpacity onPress={() => handlePage(subject, 'notes')} key={subject.id}>
                  <Boxes name={subject.name} img={subject.img} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Quizzes */}
          <View className="mt-10">
            <Text className="text-[15px] font-bold mb-3 ml-3">Quizzes</Text>
            <View className="flex-row flex-wrap mt-5 justify-center">
              {subjectQuizzes.map(subject => (
                <TouchableOpacity onPress={() => handlePage(subject, 'quizzes')} key={subject.id}>
                  <Boxes name={subject.name} img={subject.img} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default StudyMaterials;
