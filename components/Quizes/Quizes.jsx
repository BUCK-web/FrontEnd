import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Quizes = ({ question, options, answers, setCorrectAnswers, correctAnswers, setCountQuestions, CountQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        if (option === answers) {
            setCorrectAnswers(correctAnswers + 1);
        }
    };

    const optionLabels = ['A', 'B', 'C', 'D'];

    return (
        <ScrollView>
            <SafeAreaView className="p-4 h-[85vh] flex items-center justify-center">
                <View>
                    <Text className="text-4xl font-bold">Quiz</Text>
                </View>
                <View>
                    <Text className="text-lg mt-5 mb-5">{question}</Text>
                    {
                        options.map((option, index) => (
                            <View key={index} className="flex-row items-center justify-between mt-4">
                                <TouchableOpacity
                                    className={`w-full p-4 rounded ${
                                        selectedOption !== null
                                            ? option === answers
                                                ? 'bg-green-500'
                                                : option === selectedOption
                                                    ? 'bg-red-500'
                                                    : 'bg-gray-500'
                                            : 'bg-gray-500'
                                    }`}
                                    onPress={() => handleOptionPress(option)}
                                    disabled={selectedOption !== null}
                                >
                                    <Text className="text-xl text-white">{optionLabels[index]}. {option}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
                <View className="flex-row justify-between w-full mt-6">
                    <TouchableOpacity 
                        className="bg-blue-500 p-4 rounded w-[180px] mr-2" 
                        onPress={() => {
                            setCountQuestions(CountQuestions + 1);
                            setSelectedOption(null);
                        }}
                    >
                        <Text className="text-white text-center text-lg">Next</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className="bg-gray-500 p-4 rounded w-[180px] ml-2" 
                        onPress={() => {
                            setCountQuestions(CountQuestions + 1);
                            setSelectedOption(null);
                        }}
                    >
                        <Text className="text-white text-center text-lg">Skip</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Quizes; 