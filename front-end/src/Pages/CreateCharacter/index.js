import React, { useEffect, useState } from "react";
import SideMenu from "../../Components/SideMenu";
import { BackgroundBlock, CreateGameContainer,CreateGameTitle, DivInput, StyledDiv,BackButton} from "./style";
import MainButton from "../../Components/MainButton";
import { MdArrowBack } from "react-icons/md";
import createCharacter from "../../Services/createCharacter";
import { useParams } from "react-router-dom";

const CreateCharacter = () => {
  const [token, setToken]= useState("");
  const [playerName, setPlayerName]= useState("");
  const [characterName, setCharacterName]= useState("");
  const {gameId} = useParams();

  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    setToken(token);
  },[])

  const  handleCreateCharacter=async ()=>{
    let character = await createCharacter(token,gameId,playerName,characterName)
    if(character)
      window.location.href="/character/"+character.id;
  }
  
  return (
    <BackgroundBlock>
        <SideMenu></SideMenu>
        <BackButton onClick={() => window.history.back()}><MdArrowBack></MdArrowBack></BackButton>
        
        <CreateGameContainer>
            <CreateGameTitle>Criação de Ficha</CreateGameTitle>
            <DivInput placeholder="Nome do Jogador" onChange={(event) => setPlayerName(event.target.value)}></DivInput>
            <DivInput placeholder="Nome do Personagem" onChange={(event) => setCharacterName(event.target.value)}></DivInput>
            <StyledDiv>
              <MainButton
                title={"Cancelar"}
                type="button"
                onClick={() => window.history.back()}
              />
              <MainButton title={"Salvar"} onClick={()=>handleCreateCharacter()}/>
            </StyledDiv>
        </CreateGameContainer>
    </BackgroundBlock>
  );
};

export default CreateCharacter;
