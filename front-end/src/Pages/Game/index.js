import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import MainButton from "../../Components/MainButton";
import SideMenu from "../../Components/SideMenu";
import { FilesBox, FilesBody, Box, StyledDiv } from "./styles";
import FileInfo from "../../Components/FileInfo";
import DeleteModal from "../../Components/DeleteModal";
import readGame from "../../Services/readGame";
import { useParams } from 'react-router-dom'
import deleteCharacter from "../../Services/deleteCharacter";


const Game = ()=>{

  const [charactersList,setCharactersList] = useState([]);
  const [token,setToken] = useState("");
  const [deleteModalVisible,setDeleteModalVisible]=useState(false);
  const [deleteCharacterId,setDeleteCharacterId]=useState(-1);
  const [game,setGame]=useState({});
  const {gameId} = useParams();



  const redirectToCharacter = (characterId)=>{
    window.location.href="/character/"+characterId;
  }

  const handleDeleteCharacter = async()=>{
    await deleteCharacter(token,deleteCharacterId);
    window.location.reload(false);
  }


  const closeDeleteModal=()=>{
    setDeleteModalVisible(false);
  }

  const openDeleteModal=(character)=>{
    setDeleteModalVisible(true);
    setDeleteCharacterId(character.id);
  }

  useEffect(()=>{
    let token = localStorage.getItem("userToken");
    setToken(token);
    
  },[])

  useEffect(()=>{
    setGameInfo();
  },[token])


  const setGameInfo=async()=>{
    let game= await readGame(token,gameId);
    setGame(game);
    if(game && game.charactersSheet){
      setCharactersList(game.charactersSheet);
    }
  }

  return (
    <>
      {(deleteModalVisible)&&(<DeleteModal onConfirm={handleDeleteCharacter} onClose={closeDeleteModal} title={"a ficha"}></DeleteModal>)}
      <FilesBody>
          <SideMenu></SideMenu>
          <FilesBox>
            <label id="l0">{game.name}</label>
            <Box>
              <div id="colName">
                <label id="l1">Nome do personagem</label>
                <label id="l2">Nome do jogador</label>
                <label id="l3">Vida</label>
              </div>
              <div id="fileScroll">
                {(charactersList.length>0)&&(charactersList.map((character, index)=>(
                  <FileInfo nameFile={character.characterName} author={character.playerName} date={character.life} onPlay={()=>{redirectToCharacter(character.id)}} onEdit={()=>{redirectToCharacter(character.id)}}  onDelete={()=>{openDeleteModal(character)}}/>
                )))}
              </div>
            </Box>
            </FilesBox>
          <StyledDiv onClick={()=>{window.location.href="/createCharacter/"+gameId}}>
            <MainButton title={"+"} />
          </StyledDiv>
      </FilesBody>
    </>
  );
}


export default Game;
