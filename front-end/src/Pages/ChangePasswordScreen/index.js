import React from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormRegister, StyledDiv } from "./styles";
import { withRouter } from "react-router";

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      n_password: "",
    };
  }

  setUser(newUser) {
    this.setState({ user: newUser });
  }

  setEmail(newMail) {
    this.setState({ email: newMail });
  }

  setPassword(newPass) {
    this.setState({ password: newPass });
  }

  setN_password(newN_password) {
    this.setState({ n_password: newN_password });
  }

  render() {
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
              valueInput={this.state.password}
              onChangeInput={(event) => this.setPassword(event.target.value)}
            ></LoginInput>
            <LoginInput
              idInput="n_password"
              nameInput="n_password"
              placeholderInput="Confirme sua nova senha"
              inputType="password"
              valueInput={this.state.n_password}
              onChangeInput={(event) => this.setN_password(event.target.value)}
            ></LoginInput>
            <StyledDiv>
              <MainButton
                title={"Cancelar"}
                type="button"
                onClick={() => window.history.back()}
              />
              <MainButton title={"Solicitar senha"} />
            </StyledDiv>
          </form>
        </FormRegister>
      </>
    );
  }
}

export default withRouter(RegisterScreen);
