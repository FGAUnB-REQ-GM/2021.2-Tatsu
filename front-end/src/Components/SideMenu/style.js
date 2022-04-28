import styled from "styled-components";


export const SideMenuContainer=styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:20vw;
`;

export const LogoImg=styled.img`
    width:20vw;
    margin:auto;
`;

export const StyledButtonLogin = styled.div`
  margin-left: 2vw;
  margin-bottom: 2vh;
  color: #f2b10c;
  cursor: pointer;
`;


export const DropDownMenu = styled.ul`
  background-color: #f2b10c;
  color:#ffffff;
  padding:1em;
  font-size:0.8em;
  font-weight:bold;
  list-style:none;
  border-radius:10px;
  position:fixed;
  bottom:1vh;
  left:6vw;
`;

export const DropDownItem =  styled.li`
    padding:1em;
    :hover {
     background-color: rgba(255,255,255,0.15);
     cursor: pointer;
    }
    border-radius:10px;
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
    height:70vh;
    margin:auto;
    border-radius:15px;
    background-color: #f2b10c;
    padding:1rem;
`;

export const ModalClose = styled.h2`
    color:white;
    margin-left:auto;
    margin:right:0;
    cursor:pointer;
`
export const ModalTitle = styled.h2`
    color:white;
`