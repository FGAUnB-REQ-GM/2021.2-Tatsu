import React from "react";
import { VscAccount } from "react-icons/vsc";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FilesBox, FilesBody, Box, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import FileInfo from "../../Components/FileInfo";
import readGames from "../../Services/readGames";

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList:[],
      userToken:""
    };
    this.state.userToken=localStorage.getItem('userToken')
    if(!this.state.userToken){
      window.location.href = '/'; 
    }

    this.getGameList();
  }

  async getGameList(){
    let gameList= await readGames(this.state.userToken);
    this.setState({gameList: gameList})
  }
  render() {
    return (
      <>
        <FilesBody>
        <img src={Logo} alt="Logo" />
            <FilesBox>
            <label id="l0">Ficheiros</label>
            <Box>
              <div id="colName">
                <label id="l1">Nome</label>
                <label id="l2">Autor</label>
                <label id="l3">Criação</label>
              </div>
              {console.log(this.state.gameList)}
              <div id="fileScroll">
                {(this.state.gameList.length>0)&&(this.state.gameList.map((game, index)=>(
                  <FileInfo nameFile={game.name} author={game.author} date={game.createdAt}/>
                )))}
              </div>
            </Box>
            </FilesBox>
        </FilesBody>
            <StyledDiv>
              <MainButton title={< VscAccount size={28} />} />
              <MainButton title={"+"} />
            </StyledDiv>
      </>
    );
  }
}

export default withRouter(Files);
