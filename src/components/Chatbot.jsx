import React from "react";
import ChatBot2 from "react-simple-chatbot";

const ChatBot=()=>{
    const steps = [
        {
            id: "1",
            message: "Hello! What is your name?",
            trigger: "2",
        },
        {
            id: "2",
            user: true,
            trigger: "3",
        },
        {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
        },
        {
            id: "4",
            message: "What number am I thinking?",
            trigger: "5",
        },
        {
            id: "5",
            options: [
                { value: 1, label: "Number 1", trigger: "6" },
                { value: 2, label: "Number 2", trigger: "8" },
                { value: 3, label: "Number 3", trigger: "8" }
            ],
        },
        {
            id: "6",
            message: "Wrong answer, try again.",
            trigger: "5"
        },
        {
            id: "8",
            message: "Awesome! You are a telepath.",
            end: true
        }
    ];
    

  return (
    <ChatBot2
      steps={steps}
      recognitionEnable={true} // Enable voice recognition
      floating={true}
    />
  );
};
export default  ChatBot;
