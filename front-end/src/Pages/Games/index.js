import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import MainButton from "../../Components/MainButton";
import SideMenu from "../../Components/SideMenu";
import Logo from "../../Assets/logo.svg";
import { FilesBox, FilesBody, Box, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import FileInfo from "../../Components/FileInfo";
import readGames from "../../Services/readGames";


const Games = ()=>{

  const [gameList,setGameList] = useState([]);
  const [token,setToken] = useState("");

  const getGameList = async()=>{
    let gameList= await readGames(token);
    setGameList(gameList)
  }


  useEffect(()=>{

    let token=localStorage.getItem('userToken')
    if(!token){
      window.location.href = '/'; 
    }

    setToken(token);
  },[]);


  useEffect(()=>{
    getGameList();
  },[token]);

  return (
    <>
      <FilesBody>
          <SideMenu></SideMenu>
          <FilesBox>
            <label id="l0">Ficheiros</label>
            <Box>
              <div id="colName">
                <label id="l1">Nome</label>
                <label id="l2">Autor</label>
                <label id="l3">Criação</label>
              </div>
              <div id="fileScroll">
                {(gameList.length>0)&&(gameList.map((game, index)=>(
                  <FileInfo nameFile={game.name} author={game.author} date={game.createdAt} onClick1={()=>{window.location.href="/editGame/"+game.id}}/>
                )))}
              </div>
            </Box>
            </FilesBox>
          <StyledDiv onClick={()=>{window.location.href="/createGame"}}>
            <MainButton title={"+"} />
          </StyledDiv>
      </FilesBody>
    </>
  );
}


export default Games;
