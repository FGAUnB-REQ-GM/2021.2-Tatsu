import styled from "styled-components";

export const BackgroundBlock = styled.div`
    display: flex;
    position: absolute;
    background-color: #14142c;
    width:100vw;
    height: 100vh;
`;

export const CreateGameContainer=styled.div`
    display: flex;
    flex-direction:column;
    width: 25vw;
    height:40vh;
    margin:auto;
    margin-left:17.5vw;
`;

export const CreateGameTitle=styled.h1`
    color:white;
`;


export const DivInput = styled.input`
  display: flex;
  align-items: center;
  position: relative;
  width: calc(100% - 0.5rem);
  line-height: 3rem;
  height: 2.5rem;
  border-radius: 15px;
  margin-: 0.5rem 0rem;
  padding-left: 0.5rem;
  background: #ffff;
  margin-bottom:3vh;
  img {
    width: 100%;
    justify-content: center;
  }
  input {
    border: none;
    width: 100%;
    border-radius: 15px;
    outline: none;
    padding-left: 2rem;
    ::placeholder {
      padding-left: 0rem;
    }
  }
  .pass-icon {
    width: 50px;
    padding-left: 2px;
  }
`;


export const StyledDiv = styled.div`
  height: auto;
  width: 100%;

  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  button {
    font-family: 'Roboto', sans-serif;
    height: 2rem;
    width: 10rem;
    font-size: 20px;
  }
`;


export const BackButton = styled.div`
  position:fixed;
  color:white;
  font-size:5vh;
  cursor: pointer;
  top:3vh;
  left:5vw;
`;