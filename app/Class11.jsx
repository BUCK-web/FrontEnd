import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Pdf from "../components/PDF/Pdf";
import Quizes from "../components/Quizes/Quizes";
import Notes from "../components/Notes/Notes";
import TextBooksOrSolutions from "../components/TextBooksOrSolutions/TextBooksOrSolutions";

const Class11 = () => {
    const route = useRoute();
    const { item, type } = route.params;
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [CountQuestions, setCountQuestions] = useState(0);
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

    const MathQuestions = [
        {
            question: "What is the value of π to two decimal places?",
            options: ["2.14", "3.14", "3.24", "2.24"],
            correctAnswer: "3.14"
        },
        // ... (rest of the Math questions)
    ];

    const EnglishQuestions = [
        {
            question: "What is the past tense of 'eat'?",
            options: ["eat", "ate", "eaten", "eating"],
            correctAnswer: "ate"
        },
        // Add more English questions here
    ];

    const ScienceQuestions = [
        {
            question: "What is the chemical symbol for water?",
            options: ["Wa", "H2O", "O2", "CO2"],
            correctAnswer: "H2O"
        },
    ];

    const CommerceQuestions = [
        {
            question: "What does GDP stand for?",
            options: ["Global Domestic Product", "Gross Domestic Product", "General Domestic Product", "Gross Dividend Payment"],
            correctAnswer: "Gross Domestic Product"
        },
        // Add more Commerce questions here
    ];

    const PhysicalEducationQuestions = [
        {
            question: "How many players are there on a standard soccer team?",
            options: ["9", "10", "11", "12"],
            correctAnswer: "11"
        },
        // Add more Physical Education questions here
    ];

    const ComputerQuestions = [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Central Processor Unit"],
            correctAnswer: "Central Processing Unit"
        },
        // Add more Computer questions here
    ];

    useEffect(() => {
        // Select the appropriate question set based on the clicked item's name
        const quizName = item.name.toLowerCase().replace(/\s+/g, '');
        switch(quizName) {
            case "mathsquizzes":
                setCurrentQuizQuestions(MathQuestions);
                break;
            case "englishquizzes":
                setCurrentQuizQuestions(EnglishQuestions);
                break;
            case "sciencequizzes":
                setCurrentQuizQuestions(ScienceQuestions);
                break;
            case "commercequizzes":
                setCurrentQuizQuestions(CommerceQuestions);
                break;
            case "physicaleducationquizzes":
                setCurrentQuizQuestions(PhysicalEducationQuestions);
                break;
            case "computerquizzes":
                setCurrentQuizQuestions(ComputerQuestions);
                break;
            default:
                setCurrentQuizQuestions([]);
        }
    }, [item]);

  return (
    <View style={{ flex: 1 }}>
            {type === "subject" ? (
                <TextBooksOrSolutions item={item} Class={"Class11"}/>
            ) : type === "quizzes" ? (
                currentQuizQuestions.length > 0 && CountQuestions < currentQuizQuestions.length ? (
                    <Quizes
                        question={currentQuizQuestions[CountQuestions].question}
                        options={currentQuizQuestions[CountQuestions].options}
                        answers={currentQuizQuestions[CountQuestions].correctAnswer}
                        correctAnswers={correctAnswers}
                        setCorrectAnswers={setCorrectAnswers}
                        setCountQuestions={setCountQuestions}
                        CountQuestions={CountQuestions}
                    />
                ) : null
            ) : (
                <Notes />
            )}
        </View>

  );
};

export default Class11;
