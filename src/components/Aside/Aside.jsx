import React from "react";
import { StyledAside } from "./Aside.styled";
import video from "/robot.mp4";

const Aside = () => {
  return (
    <StyledAside>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={video} />
        </video>
      </div>
      <div className="words-container">
        <p>words 50</p>
        <p>words 150</p>
        <p>words 300</p>
        <p>words 500</p>
        <p>words 800</p>
      </div>
    </StyledAside>
  );
};

export default Aside;
