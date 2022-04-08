import React, { useEffect, useState } from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormRegister, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import register from "../../Services/register";


const RegisterScreen = ()=>{


  const [user,setUser] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");


  useEffect(()=>{
    let userToken=localStorage.getItem('userToken')
    if(userToken){
      window.location.href = '/home'; 
    }
  },[])


  const handleRegisterButton=async ()=>{
    if(password!=="" && email!=="" && user!==""){
      if(newPassword===password){
        await register(user,email,password);
        window.location.reload(false);
      }
      else{
        alert("As senhas não conferem!");
      }
    }
    else{
      alert("Os campos não podem ser deixados em branco!")
    }
  }


  return (
    <>
      <FormRegister>
        <img src={Logo} alt="Logo" />
        <form>
          <label>Cadastro</label>
          <LoginInput
            idInput="user"
            nameInput="user"
            placeholderInput="Usuário"
            inputType="text"
            valueInput={user}
            onChangeInput={(event) => setUser(event.target.value)}
          ></LoginInput>
          <LoginInput
            idInput="email"
            nameInput="email"
            placeholderInput="Email"
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
          <LoginInput
            idInput="n_password"
            nameInput="n_password"
            placeholderInput="Repita a senha"
            inputType="password"
            valueInput={newPassword}
            onChangeInput={(event) => setNewPassword(event.target.value)}
          ></LoginInput>
          <StyledDiv>
            <MainButton
              title={"Cancelar"}
              type="button"
              onClick={() => window.history.back()}
            />
            <MainButton title={"Cadastrar"} onClick={()=>handleRegisterButton()}/>
          </StyledDiv>
        </form>
      </FormRegister>
    </>
  );

}

export default RegisterScreen;
