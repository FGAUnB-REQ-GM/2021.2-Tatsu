import React from "react";
import { VscAccount } from "react-icons/vsc";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FilesBox, FilesBody, Box, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import FileInfo from "../../Components/FileInfo";

class Files extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    let userToken=localStorage.getItem('userToken')
    if(!userToken){
      window.location.href = '/'; 
    }
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
                <label id="l4">Informação</label>
              </div>
              <div id="fileScroll">
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
                <FileInfo nameFile={"Jogo 1"} author={"João"} date="12/02/2022" info={"https://www.google.com.br"} />
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
