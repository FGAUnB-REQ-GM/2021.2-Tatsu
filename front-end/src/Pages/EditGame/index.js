import React, { useEffect, useState } from "react";
import SideMenu from "../../Components/SideMenu";
import { BackgroundBlock, CreateGameContainer,CreateGameTitle, DivInput, StyledDiv,BackButton} from "./style";
import MainButton from "../../Components/MainButton";
import { MdArrowBack } from "react-icons/md";
import readGame from "../../Services/readGame";
import { useParams } from 'react-router-dom'
import updateGame from "../../Services/updateGame";

const EditGame = (props) => {
  const [token, setToken]= useState("");
  const [name, setName]= useState("");
  const {gameId} = useParams();

  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    setToken(token);
    
  },[])

  useEffect(()=>{
    setGame();
  },[token])


  const setGame=async()=>{
    let game= await readGame(token,gameId);
    setName(game.name);
  }

  const  handleCreateGame=async ()=>{
    await updateGame(token,gameId,name)
    window.history.back()
  }
  
  return (
    <BackgroundBlock>
        <SideMenu></SideMenu>
        <BackButton onClick={() => window.history.back()}><MdArrowBack></MdArrowBack></BackButton>
        
        <CreateGameContainer>
            <CreateGameTitle>Editar ficheiro</CreateGameTitle>
            <DivInput placeholder="Nome do ficheiro" value={name} onChange={(event) => setName(event.target.value)}></DivInput>
            <StyledDiv>
              <MainButton
                title={"Cancelar"}
                type="button"
                onClick={() => window.history.back()}
              />
              <MainButton title={"Salvar"} onClick={()=>handleCreateGame()}/>
            </StyledDiv>
        </CreateGameContainer>
    </BackgroundBlock>
  );
};

export default EditGame;
