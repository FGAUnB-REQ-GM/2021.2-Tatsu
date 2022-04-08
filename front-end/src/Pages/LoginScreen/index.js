import React, { useEffect, useState } from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormLogin, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import login from "../../Services/login"


const LoginScreen=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  useEffect(()=>{
    let userToken=localStorage.getItem('userToken')
    if(userToken){
      window.location.href = '/home'; 
    }
  })

  
  const handleLogin=async ()=>{
    await login(email, password);
    let userToken=localStorage.getItem('userToken')
    if(userToken){
      window.location.reload(false);
    }
  }

  return (
    <>
      <FormLogin>
        <form>
          <img src={Logo} alt="Logo" />
          <LoginInput
            idInput="email"
            nameInput="email"
            placeholderInput="Usuário"
            inputType="email"
            valueInput={email}
            onChangeInput={(event) => setEmail(event.target.value)}
          ></LoginInput>
          <LoginInput
            idInput="password"
            nameInput="password"
            placeholderInput="Senha"
            inputType="password"
            valueInput={password}
            onChangeInput={(event) => setPassword(event.target.value)}
          ></LoginInput>
          <StyledDiv>
            <MainButton title={"ENTRAR"} onClick={()=>handleLogin()}/>
            <Link link to="/register">
              Não possui conta?
            </Link>
          </StyledDiv>
        </form>
      </FormLogin>
    </>
  );
}

export default LoginScreen;
