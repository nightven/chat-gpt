import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 23px 27px 14px;

  .chat {
    display: flex;
    flex-direction: column;
    height: 95%;
    justify-content: space-between;
    align-items: center;
  }

  .voice-container {
    display: flex;
    gap: 8px;
    width: 300px;

    .voice {
      width: 100%;
    }
  }

  .assistant {
    width: 100%;
  }

  .answer {
    width: 800px;
    margin-right: auto;
    padding: 12px;
    background-color: #474747;
    border-radius: 8px 8px 8px 0;
  }
  .play {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: none;
    background-color: #0abd5d;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .button-container {
    button {
      border: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100px;
      width: 100px;
      cursor: pointer;
    
      /* background-color: #75f0a6; */
    }
  }
`;
