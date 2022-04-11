import styled from "styled-components";


export const CharacterSheetBody=styled.div`
    background-color:#14142c;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:90%;
    margin:auto;
`;


export const CharacterSheetRow=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:0.5vw;
    width:100%;
    margin-top:0px;
    padding-top:0px;
`;

export const CharacterSheetColumn = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0.5vw;
    width:100%;
    margin-top:0px;
    margin:0.5vw;
    padding-top:0px;
`;


export const CharacterSheetBlockRow=styled.div`
    background-color:#F2B10C;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-radius:10px;
    padding:0.5vw;
    width:100%;
    margin:0.5vw;
    margin-top:0px;
    padding-top:0px;
`;

export const CharacterSheetBlockColumn = styled.div`
    background-color:#F2B10C;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:10px;
    padding:0.5vw;
    margin:0.5vw;
    width:100%;
    margin-top:0px;
    padding-top:0px;
`;

export const CharacterSheetLogo = styled.img`
    width:12vw;
`;


export const CharacterSheetTtile = styled.h3`
    color:white;
    text-align:center;
`;

export const CharacterSheetSubTtile = styled.h6`
    color:white;
    text-align:center;
`;

export const CharacterSheetInput = styled.input`
  display: flex;
  align-items: center;
  position: relative;
  width: 15vw;
  line-height: 3rem;
  height: 1.5rem;
  border-radius: 10px;
  margin: auto;
  padding-left: 0.5rem;
  background: #ffff;
  margin-left:0.5vw;
  margin-right:0.5vw;
  img {
    width: 100%;
    justify-content: center;
  }
  input {
    border: none;
    width: 100%;
    border-radius: 10px;
    outline: none;
    padding-left: 2rem;
    ::placeholder {
      padding-left: 0rem;
    }
  }
`;


export const CharacterSheetInputNumber = styled.input`
  display: flex;
  align-items: center;
  position: relative;
  width: 6vw;
  line-height: 3rem;
  height: 1.5rem;
  border-radius: 15px;
  margin: auto;
  padding-left: 0.5rem;
  background: #ffff;
  margin-left:0.5vw;
  margin-right:0.5vw;
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
`;


export const CharacterSheetTextInput = styled.textarea`
  display: flex;
  align-items: center;
  position: relative;
  width: 90%;
  line-height: 1rem;
  border-radius: 10px;
  margin: auto;
  padding-left: 0.5rem;
  background: #ffff;
  margin-left:0.5vw;
  margin-right:0.5vw;
  resize: none;
  img {
    width: 100%;
    justify-content: center;
  }
  input {
    border: none;
    width: 100%;
    border-radius: 10px;
    outline: none;
    padding-left: 2rem;
    ::placeholder {
      padding-left: 0rem;
    }
  }
`;


export const StyledDiv = styled.div`
  height: auto;
  width: 24rem;

  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin:auto;
  button {
    font-family: 'Roboto', sans-serif;
    height: 2rem;
    width: 10rem;
    font-size: 20px;
  }
`;
