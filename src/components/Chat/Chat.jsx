import React, { useEffect, useState } from "react";
import { StyledDiv } from "./Chat.styled";
import { FaMicrophone } from "react-icons/fa6";
import { IconContext } from "react-icons";
import "regenerator-runtime/runtime.js";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import AnswerBot from "../AnswerBot/AnswerBot";
import { useSpeechSynthesis } from "react-speech-hooks";
import axios from "axios";

const Chat = () => {
  const {
    transcript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const apiKey = "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";
  const [chatArray, setChatArray] = useState([]);
  const { speak, voices } = useSpeechSynthesis();
  

  const handleSpeech = () => {
    SpeechRecognition.startListening({ language: "en-US" });
  };
  useEffect(() => {
    if (finalTranscript.trim() !== "") {
      setChatArray((prev) => [
        ...prev,
        <AnswerBot key={prev.length} speech={finalTranscript} />,
        requestFunc()
      ]);
    }
    speak({ text: finalTranscript, voice: voices[3], rate: 0.9, pitch: 1.2});
  }, [finalTranscript]);

    let request = axios.create({
        headers: {
    Authorization: `Bearer ${apiKey}`
}
    })

    const requestFunc = () => {
        let message = {
          role: "user",
          content: `${finalTranscript}`,
        };
        let params = {
          model: "gpt-3.5-turbo",
          message: message,
        };
        request.post('https://api.openai.com/v1/chat/completions', params)
        .then(res=> console.log(res))
    }
    
  return (
    <StyledDiv>
      <div className="chat">
        {chatArray.map((topic, index) => (
            <div key={index}>{topic}</div>
        ))}
      </div>
      <div className="button-container">
        <button
          style={{ backgroundColor: `${listening ? "#75f0a6" : "gray"}` }}
          onClick={handleSpeech}
        >
          <IconContext.Provider
            value={{
              size: "4em",
              color: `${listening ? "white" : "rgba(7, 32, 19, .48)"}`,
            }}
          >
            <FaMicrophone />
          </IconContext.Provider>
        </button>
      </div>
    </StyledDiv>
  );
};

export default Chat;
