import React, { useState } from "react";
import { DropDownMenu,DropDownItem, SideMenuContainer,LogoImg,StyledButtonLogin} from "./style";
import Logo from "../../Assets/logo.svg";
import { BiUserCircle } from "react-icons/bi";
import {MdLogout,MdHome,MdEdit} from "react-icons/md"

const SideMenu = () => {
  const [dropDownVisible,setDropDownVisible]=useState(false);

  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload(false);
  }

  const handleHome=()=>{
    window.location.href="/home"
  }

  const handleEditProfile=()=>{
    window.location.href="/editProfile"
  }
  
  return (
    <SideMenuContainer>
      <LogoImg src={Logo}></LogoImg>
      <StyledButtonLogin>
        <BiUserCircle size="5rem" onMouseEnter={()=>{setDropDownVisible(true)}}/>
        {(dropDownVisible)&&(<DropDownMenu onMouseLeave={()=>{setDropDownVisible(false)}}>
          <DropDownItem onClick={handleHome}><MdHome></MdHome>Página ínicial</DropDownItem>
          <DropDownItem onClick={handleEditProfile}><MdEdit></MdEdit>Editar Perfil</DropDownItem>
          <DropDownItem onClick={handleLogout}><MdLogout></MdLogout>Sair</DropDownItem>
        </DropDownMenu>)}
      </StyledButtonLogin>
    </SideMenuContainer>
  );
};

export default SideMenu;
