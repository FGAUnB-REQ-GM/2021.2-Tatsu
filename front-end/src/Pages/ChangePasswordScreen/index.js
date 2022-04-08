import React, { useState } from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormRegister, StyledDiv } from "./styles";


const ChangePasswordScreen = ()=>{


  const [password,setPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");


  return (
    <>
      <FormRegister>
        <img src={Logo} alt="Logo" />
        <form>
          <label>Alterar Senha</label>
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
            placeholderInput="Confirme sua nova senha"
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
            <MainButton title={"Alterar senha"} />
          </StyledDiv>
        </form>
      </FormRegister>
    </>
  );
}

export default ChangePasswordScreen;
