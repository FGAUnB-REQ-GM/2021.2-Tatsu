import React, { useEffect, useState } from "react";
import SideMenu from "../../Components/SideMenu";
import { BackgroundBlock, CreateGameContainer,CreateGameTitle, DivInput, StyledDiv,BackButton} from "./style";
import MainButton from "../../Components/MainButton";
import { MdArrowBack } from "react-icons/md";
import createGame from "../../Services/createGame";

const CreateGame = () => {
  const [token, setToken]= useState("");
  const [name, setName]= useState("");

  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    setToken(token);
  },[])

  const  handleCreateGame=async ()=>{
    await createGame(token,name)
    window.history.back()
  }
  
  return (
    <BackgroundBlock>
        <SideMenu></SideMenu>
        <BackButton onClick={() => window.history.back()}><MdArrowBack></MdArrowBack></BackButton>
        
        <CreateGameContainer>
            <CreateGameTitle>Criação de ficheiro</CreateGameTitle>
            <DivInput placeholder="Nome do ficheiro" onChange={(event) => setName(event.target.value)}></DivInput>
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

export default CreateGame;
