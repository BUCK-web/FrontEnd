import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Pdf from "../components/PDF/Pdf";
import Quizes from "../components/Quizes/Quizes";
import Notes from "../components/Notes/Notes";
import TextBooksOrSolutions from "../components/TextBooksOrSolutions/TextBooksOrSolutions";

const Class12 = () => {
    const route = useRoute();
    const { item, type } = route.params;
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [CountQuestions, setCountQuestions] = useState(0);
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

    const MathQuestions = [
        {
            question: "What is the value of 7²?",
            options: ["49", "56", "64", "36"],
            correctAnswer: "49"
        },
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr²", "2πr", "r²π", "πd"],
            correctAnswer: "πr²"
        },
    ];
    

    const EnglishQuestions = [
        {
            question: "What is the synonym of 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correctAnswer: "Joyful"
        },
        {
            question: "What is the antonym of 'difficult'?",
            options: ["Easy", "Hard", "Complex", "Complicated"],
            correctAnswer: "Easy"
        },
    ];
    

    const ScienceQuestions = [
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Diamond", "Iron", "Platinum"],
            correctAnswer: "Diamond"
        },
    ];
    
    const CommerceQuestions = [
        {
            question: "What is the primary purpose of a business?",
            options: ["Make Profit", "Help Society", "Reduce Costs", "Increase Sales"],
            correctAnswer: "Make Profit"
        },
        {
            question: "What does 'liquid asset' mean?",
            options: ["Easily convertible to cash", "Not easily convertible to cash", "Fixed assets", "Long-term investments"],
            correctAnswer: "Easily convertible to cash"
        },
    ];
    

    const PhysicalEducationQuestions = [
        {
            question: "In which sport do you score a 'try'?",
            options: ["Football", "Basketball", "Rugby", "Cricket"],
            correctAnswer: "Rugby"
        },
        {
            question: "What is the duration of a standard soccer match?",
            options: ["60 minutes", "90 minutes", "120 minutes", "45 minutes"],
            correctAnswer: "90 minutes"
        },
    ];
    

    const ComputerQuestions = [
        {
            question: "What does 'RAM' stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Rapid Access Memory"],
            correctAnswer: "Random Access Memory"
        },
        {
            question: "Which device is used to input data into a computer?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            correctAnswer: "Keyboard"
        },
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
                <TextBooksOrSolutions item={item} Class={"Class12"}/>
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

export default Class12;
