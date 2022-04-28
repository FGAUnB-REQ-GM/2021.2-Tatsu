import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import MainButton from "../../Components/MainButton";
import SideMenu from "../../Components/SideMenu";
import { FilesBox, FilesBody, Box, StyledDiv, GameStatsColumn, GameStatsBox, GameChatBox, GameStatsButton, GameChatContainer, GameChatInputDiv, GameChatInput, GameChatButton, ModalBackgroundBlock, ModalContainer, GameDiceButton, GameDiceInput, GameDiceTitle, GameDiceCloseButton } from "./styles";
import FileInfo from "../../Components/FileInfo";
import DeleteModal from "../../Components/DeleteModal";
import readGame from "../../Services/readGame";
import { useParams } from 'react-router-dom'
import deleteCharacter from "../../Services/deleteCharacter";
import { MdCasino, MdClose, MdGroupAdd, MdSend } from "react-icons/md";


const Game = ()=>{

  const [charactersList,setCharactersList] = useState([]);
  const [token,setToken] = useState("");
  const [deleteModalVisible,setDeleteModalVisible]=useState(false);
  const [diceModalVisible,setDiceModalVisible]=useState(false);
  const [deleteCharacterId,setDeleteCharacterId]=useState(-1);
  const [game,setGame]=useState({});
  const {gameId} = useParams();
  const [diceValue,setDiceValue]=useState(1);



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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setGameInfo=async()=>{
    let game= await readGame(token,gameId);
    setGame(game);
    if(game && game.charactersSheet){
      setCharactersList(game.charactersSheet);
    }
  }

  const setDice=async (value)=>{
    let dice=1;
    for(let i=0;i<50;i++){
      dice=( Math.floor(Math.random() * (value-1)+1));
      setDiceValue(dice);
      await sleep(10);
    }

  }

  return (
    <>
      {(deleteModalVisible)&&(<DeleteModal onConfirm={handleDeleteCharacter} onClose={closeDeleteModal} title={"a ficha"}></DeleteModal>)}
      {(diceModalVisible)&&(<ModalBackgroundBlock>
        <ModalContainer>
          <GameDiceCloseButton onClick={()=>{setDiceModalVisible(false)}}><MdClose></MdClose></GameDiceCloseButton>
          <GameDiceInput>
            <GameDiceButton onClick={()=>{setDice(6)}}>D6</GameDiceButton>
            <GameDiceButton onClick={()=>{setDice(10)}}>D10</GameDiceButton>
            <GameDiceButton onClick={()=>{setDice(12)}}>D12</GameDiceButton>
            <GameDiceButton onClick={()=>{setDice(20)}}>D20</GameDiceButton>
          </GameDiceInput>
          <GameDiceTitle>{diceValue}</GameDiceTitle>
        </ModalContainer>
      </ModalBackgroundBlock>)}
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
            <GameStatsColumn>
              <GameChatBox>
                <GameChatContainer readOnly={true}>

                </GameChatContainer>
                <GameChatInputDiv>
                  <GameChatInput></GameChatInput>
                  <GameChatButton><MdSend></MdSend></GameChatButton>
                </GameChatInputDiv>
              </GameChatBox>
              <GameStatsBox>
                <GameStatsButton>
                  <MdGroupAdd></MdGroupAdd>
                </GameStatsButton>
                <GameStatsButton onClick={()=>{setDiceModalVisible(true)}}>
                  <MdCasino></MdCasino>
                </GameStatsButton>
              </GameStatsBox>
            </GameStatsColumn>
            </FilesBox>
          <StyledDiv onClick={()=>{window.location.href="/createCharacter/"+gameId}}>
            <MainButton title={"+"} />
          </StyledDiv>
      </FilesBody>
    </>
  );
}


export default Game;
