import React, { useEffect, useState } from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormRegister, StyledDiv } from "./styles";


const ForgetPassword=()=>{
  const [user,setUser]=useState("");

  useEffect(()=>{
    let userToken=localStorage.getItem('userToken')
    if(userToken){
      window.location.href = '/'; 
    }
  })


  return (
    <>
      <FormRegister>
        <img src={Logo} alt="Logo" />
        <form>
          <label>Esqueceu sua senha?</label>
          <LoginInput
            idInput="mail"
            nameInput="mail"
            placeholderInput="Email"
            inputType="text"
            valueInput={user}
            onChangeInput={(event) => setUser(event.target.value)}
          ></LoginInput>
          <StyledDiv>
            <MainButton
              title={"Cancelar"}
              type="button"
              onClick={() => window.history.back()}
            />
            <MainButton title={"Solicitar Senha"} />
          </StyledDiv>
        </form>
      </FormRegister>
    </>
  );
}
export default ForgetPassword;
