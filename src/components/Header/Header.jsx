import React from "react";
import { IoClose } from "react-icons/io5";
import { StyledDiv } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <StyledDiv className="container">
        <p className="line"></p>
        <IoClose />
      </StyledDiv>
    </header>
  );
};

export default Header;
