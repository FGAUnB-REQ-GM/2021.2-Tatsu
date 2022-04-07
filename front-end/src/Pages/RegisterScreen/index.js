import React from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormRegister, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import register from "../../Services/register";

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      nPassword: "",
    };
    let userToken=localStorage.getItem('userToken')
    if(userToken){
      window.location.href = '/files'; 
    }
  }

  setUser(newUser) {
    this.setState({ user: newUser });
  }

  setEmail(newMail) {
    this.setState({ email: newMail });
  }

  setPassword(newPassword) {
    this.setState({ password: newPassword });
  }

  setNPassword(newNPassword) {
    this.setState({ nPassword: newNPassword });
  }

  async handleRegisterButton(){
    if(this.state.password!="" && this.state.email!="" && this.state.user!=""){
      if(this.state.nPassword===this.state.password){
        await register(this.state.user,this.state.email,this.state.password);
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

  render() {
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
              valueInput={this.state.user}
              onChangeInput={(event) => this.setUser(event.target.value)}
            ></LoginInput>
            <LoginInput
              idInput="email"
              nameInput="email"
              placeholderInput="Email"
              inputType="email"
              valueInput={this.state.email}
              onChangeInput={(event) => this.setEmail(event.target.value)}
            ></LoginInput>
            <LoginInput
              idInput="password"
              nameInput="password"
              placeholderInput="Senha"
              inputType="password"
              valueInput={this.state.password}
              onChangeInput={(event) => this.setPassword(event.target.value)}
            ></LoginInput>
            <LoginInput
              idInput="n_password"
              nameInput="n_password"
              placeholderInput="Repita a senha"
              inputType="password"
              valueInput={this.state.nPassword}
              onChangeInput={(event) => this.setNPassword(event.target.value)}
            ></LoginInput>
            <StyledDiv>
              <MainButton
                title={"Cancelar"}
                type="button"
                onClick={() => window.history.back()}
              />
              <MainButton title={"Cadastrar"} onClick={()=>this.handleRegisterButton()}/>
            </StyledDiv>
          </form>
        </FormRegister>
      </>
    );
  }
}

export default withRouter(RegisterScreen);
