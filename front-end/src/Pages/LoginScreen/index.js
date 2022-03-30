import React from "react";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import Logo from "../../Assets/logo.svg";
import { FormLogin, StyledDiv } from "./styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setPassword(newPass) {
    this.setState({ password: newPass });
  }

  setEmail(newMail) {
    this.setState({ email: newMail });
  }

  render() {
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
              valueInput={this.state.email}
              onChangeInput={(event) => this.setEmail(event.target.value)}
            >
            </LoginInput>
            <LoginInput
              idInput="password"
              nameInput="password"
              placeholderInput="Senha"
              inputType="password"
              valueInput={this.state.password}
              onChangeInput={(event) => this.setPassword(event.target.value)}
            >
            </LoginInput>
            <StyledDiv>
              <MainButton title={"ENTRAR"} />
              <Link link
                to="/esqueci-senha"
                onClick={() => {
                  alert("Estamos trabalhando nisso");
                }}
              >
                Não possui conta?
              </Link>
            </StyledDiv>
          </form>
        </FormLogin>
      </>
    );
  }
}

export default withRouter(LoginScreen);
