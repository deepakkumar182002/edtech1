import React from "react";
import ChatBot from "react-simple-chatbot";

export default function Chatbot() {
    return (
        <>
            <ChatBot
                steps={[
                    {
                        id: "0",
                        message: "Welcome to react chatbot!",
                        trigger: "1",
                    },
                    {
                        id: "1",
                        message: "Bye!",
                        end: true,
                    },
                ]}
                floating={true}
             />
        </>
    );
}
