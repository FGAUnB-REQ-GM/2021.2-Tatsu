import React, { useState } from "react";
import { DropDownMenu,DropDownItem, SideMenuContainer,LogoImg,StyledButtonLogin, ModalBackgroundBlock, ModalContainer, ModalTitle, ModalClose} from "./style";
import Logo from "../../Assets/logo.svg";
import { BiUserCircle } from "react-icons/bi";
import {MdLogout,MdHome,MdEdit, MdGroupAdd, MdClose} from "react-icons/md"

const SideMenu = () => {
  const [dropDownVisible,setDropDownVisible]=useState(false);
  const [friendsModal,setFriendsModal]=useState(false);

  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload(false);
  }

  const handleHome=()=>{
    window.location.href="/home";
  }

  const handleEditProfile=()=>{
    window.location.href="/editProfile";
  }
  
  return (
    <SideMenuContainer>
      {friendsModal &&
      (<ModalBackgroundBlock>
        <ModalContainer>
          <ModalClose onClick={()=>{setFriendsModal(false)}}>
            <MdClose></MdClose>
          </ModalClose>
          <ModalTitle>
            Meus Amigos
          </ModalTitle>
        </ModalContainer>
      </ModalBackgroundBlock>)}
      <LogoImg src={Logo}></LogoImg>
      <StyledButtonLogin>
        <BiUserCircle size="5rem" onMouseEnter={()=>{setDropDownVisible(true)}}/>
        {(dropDownVisible)&&(<DropDownMenu onMouseLeave={()=>{setDropDownVisible(false)}}>
          <DropDownItem onClick={handleHome}><MdHome></MdHome>Página ínicial</DropDownItem>
          <DropDownItem onClick={handleEditProfile}><MdEdit></MdEdit>Editar Perfil</DropDownItem>
          <DropDownItem onClick={()=>{setFriendsModal(true)}}><MdGroupAdd></MdGroupAdd>Meus amigos</DropDownItem>
          <DropDownItem onClick={handleLogout}><MdLogout></MdLogout>Sair</DropDownItem>
        </DropDownMenu>)}
      </StyledButtonLogin>
    </SideMenuContainer>
  );
};

export default SideMenu;
