import styled from "styled-components";
export const styles = {};

export const FilesBody = styled.div`
  background-color: #14142c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const FilesBox = styled.div`
  width: 80vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  #l0 {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.75rem;
  }

`;

export const Box = styled.div`
  height: 40vh;
  width: 70vw;
  border-radius: 1rem;
  background-color: #F2B10C;
  margin-top: 1rem;
  margin-bottom: 1rem;

  #colName {
    padding-top: 1rem;
    margin-left: 2rem;
    width: 90%;
  }

  #l1, #l2, #l3, #l4 {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.25rem;
    text-align:center;
  }
  
  #l1 {
    display:inline-block;
    width: 20vw;
  }

  #l2{
    display:inline-block;
    width: 13vw;
  }


  #l3 {
    display:inline-block;
    width: 10vw;
  }


  #fileScroll {
    height: 84%;
    width: 98%;
    overflow-y: scroll;
  }

  #fileScroll::-webkit-scrollbar {
    width: 20px;
  }
  
  #fileScroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  #fileScroll::-webkit-scrollbar-thumb {
    background: #878787; 
    border-radius: 10px;
  }
  
  #fileScroll::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
`;


export const StyledDiv = styled.div`
  cursor: pointer;
  position:fixed;
  right:3vw;
  bottom:3vh;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  button {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const GameStatsColumn = styled.div`
  width: 70vw;
  height:100%;
  display:flex;
  flex-direction:row;
`;

export const GameStatsBox = styled.div`
  width:15vw;
  height:30vh;
  background-color: #F2B10C;
  display:flex;
  flex-direction:row;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right:0px;
  align-items:center;
  border-radius: 1rem;
`;
export const GameStatsButton = styled.button`
  background-color:#F2B10C;
  color:white;
  border:none;
  border-radius:50px;
  width:5vw;
  height:5vw;
  font-size:3vw;
  :hover {
   background-color: rgba(255,255,255,0.15);
   cursor: pointer;
  }
  align-items:center;
  margin:auto;
`;

export const GameChatBox = styled.div`
  width:50vw;
  height:30vh;
  background-color: #F2B10C;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: auto;
  margin-left:0px;
  border-radius: 1em;

  -webkit-scrollbar {
    width: 20px;
  }
  
  -webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  -webkit-scrollbar-thumb {
    background: #878787; 
    border-radius: 10px;
  }
  
  -webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
`;
export const GameChatContainer = styled.textarea`
display: flex;
align-items: center;
position: relative;
width: 47vw;
line-height: 1rem;
border-radius: 10px;
margin: auto;
padding-left: 0.5rem;
background: #ffff;
margin:auto;
margin-top:2vh;
margin-bottom:2vh;
height:15vh;
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

export const GameChatInput = styled.input`  
  border: none;
  width: 40vw;
  height: 5vh;
  border-radius: 15px;
  outline: none;
  padding-left: 2rem;
  ::placeholder {
    padding-left: 0rem;
  }
  margin:auto;
`;
export const GameChatButton = styled.button`
background-color:#F2B10C;
color:white;
border:none;
border-radius:50px;
width:3vw;
height:3vw;
font-size:1.5vw;
:hover {
 background-color: rgba(255,255,255,0.15);
 cursor: pointer;
}
align-items:center;
margin:auto;
margin-left:0px;
`;
export const GameChatInputDiv= styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`;


export const ModalBackgroundBlock = styled.div`
    position:absolute;
    display:flex;
    width:100vw;
    height:100vh;
    top:0px;
    left:0px;
    align-itens:center;
    background-color:rgba(0,0,0,0.85);
    z-index:10;
`;
export const ModalContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:30vw;
    height:50vh;
    margin:auto;
    border-radius:15px;
    background-color: #f2b10c;
    padding:1rem;
`;
export const GameDiceInput = styled.div`  
width:100%;
display:flex;
flex-direction:row;
align-items:center;
`;
export const GameDiceButton = styled.button`
  background-color:#F2B10C;
  color:white;
  border:none;
  border-radius:50px;
  width:4vw;
  height:4vw;
  font-weight:bold;
  font-size:1.5vw;
  :hover {
  background-color: rgba(255,255,255,0.15);
  cursor: pointer;
  }
  align-items:center;
  margin:auto;
`;

export const GameDiceTitle = styled.h1`
  margin:auto;
  color:white;
  font-size:20vh;
`

export const GameDiceCloseButton = styled.button`
background-color:#F2B10C;
color:white;
border:none;
border-radius:50px;
width:4vh;
height:4vh;
font-weight:bold;
font-size:3vh;
:hover {
background-color: rgba(255,255,255,0.15);
cursor: pointer;
}
align-items:center;
margin:auto;
margin-bottom:0px;
margin-right:0px;
margin-top:0px;
`;