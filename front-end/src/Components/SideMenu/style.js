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