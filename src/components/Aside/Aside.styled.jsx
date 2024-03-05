import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
  .video-container {
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 12px;
    width: 386px;
    height: 86%;
    position: relative;
    video {
      object-fit: cover;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .words-container{
    display: flex;
    gap: 10px;
  }
`;
