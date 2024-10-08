import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router"; // Make sure this is imported

const Topics = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Initialize navigation here
  const { types, item, Class } = route.params; 
  const [SubjectUsed, setSubjectUsed] = useState([]);

  const Class11English = [
    "Topic1",
    "Topic2",
    "Topic3",
    "Topic4",
    "Topic5",
    "Topic6",
    "Topic7",
    "Topic8",
  ];

  const Class11Maths = [
    "Topic1 maths",
    "Topic2 maths",
    "Topic3 maths",
    "Topic4 maths",
    "Topic5 maths",
    "Topic6 maths",
    "Topic7 maths",
    "Topic8 maths",
  ];

  const Class11Science = [
    "Biology",
    "Chemistry",
    "Physics"
  ];

  const Class11Commerce = [
    "Topic1",
    "Topic2",
    "Topic3",
    "Topic4",
    "Topic5",
    "Topic6",
    "Topic7",
    "Topic8",
  ];

  const Class11PhysicalEducation = [
    "Topic1",
    "Topic2",
    "Topic3",
    "Topic4",
    "Topic5",
    "Topic6",
    "Topic7",
    "Topic8",
  ];

  const appendedSubject = `${Class}${item?.name || ''}`; // Safely access item.name

  useEffect(() => {
    switch (appendedSubject) {
      case "Class11English":
        setSubjectUsed(Class11English);
        break;
      case "Class11Maths":
        setSubjectUsed(Class11Maths);
        break;
      case "Class11Science":
        setSubjectUsed(Class11Science);
        break;
      case "Class11Commerce":
        setSubjectUsed(Class11Commerce);
        break;
      case "Class11PhysicalEducation":
        setSubjectUsed(Class11PhysicalEducation);
        break;
      default:
        setSubjectUsed([]);
    }
  }, [appendedSubject]); // Change dependency to appendedSubject

  const handleSubjects = (subject) => {
    if (Class11Science.includes(subject)) {
      navigation.navigate("Science", { subject });
      console.log("Navigating to Science with subject:", subject);
    }
  };

  return (
    <View>
      {SubjectUsed.length > 0 ? (
        SubjectUsed.map((subject, index) => (
          <TouchableOpacity 
            className="bg-[#DB8606] rounded-md p-6 m-2" 
            key={index}
            onPress={() => handleSubjects(subject)} // Correct function name
          >
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{subject}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No topics available.</Text> // Handle empty case
      )}
    </View>
  );
};

export default Topics;
