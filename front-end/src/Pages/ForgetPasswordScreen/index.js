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
            <label>Esqueceu sua senha?</label>
            <LoginInput
              idInput="mail"
              nameInput="mail"
              placeholderInput="Email"
              inputType="text"
              valueInput={this.state.user}
              onChangeInput={(event) => this.setUser(event.target.value)}
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
}

export default withRouter(RegisterScreen);
