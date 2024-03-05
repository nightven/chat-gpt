import React from 'react'
import { IconContext } from "react-icons";
import { IoPlay } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const AnswerBot = ({speech}) => {
  return (
    <div className="assistant">
      <div className="answer">
        <div className="voice-container">
          <button className="play">
            <IconContext.Provider value={{ size: "2em" }}>
              {/* <IoMdPause /> */}
              <IoPlay />
            </IconContext.Provider>
          </button>
          <p className="voice">++++++++++++++++</p>
        </div>
        <div className="text-wrapper">
          <p className="text">{speech}</p>
          <button className="hide-text">
            Hide text
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnswerBot