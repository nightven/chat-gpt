import React from 'react'
import { IconContext } from "react-icons";
import { IoPlay } from "react-icons/io5";

const AnswerUser = ({speech}) => {
  return (
    <div className="answer-speech">
      <div>
        <button>
          <IconContext.Provider
            value={{ size: "2em", backgroundColor: "#007b35" }}
          >
            <IoPlay />
          </IconContext.Provider>
        </button>
      </div>
      <p>${speech}</p>
    </div>
  );
}

export default AnswerUser