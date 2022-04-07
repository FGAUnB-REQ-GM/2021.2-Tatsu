import React from "react";
import Logo from "../../Assets/logo.svg";
import Card from "../../Components/Card";
import CardShift from "../../Components/CardShift";
import CardGame from "../../Components/CardGame";
import { FaPlusCircle } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { BsFillDice6Fill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import {
  StyledForms,
  StyledCard,
  StyledCardDiv,
  StyledYellowRectangle,
  Cards,
  StyledYellowRectangleShift,
  StyledYellowRectangleGame,
  StyledButtonPlus,
  StyledButtonGear,
  StyledButtonDice,
  StyledButtonLogin,
} from "./styles";

const CardScreen = () => {
  return (
    <>
      <Cards>
        <img src={Logo} alt="Logo" />
        <label>Fichas</label>
        <StyledCard>
          <StyledCardDiv>
            <StyledYellowRectangle>
              <StyledForms>
                <form>
                  <div className="form-div">
                    <h1>Nomes</h1>
                    <h1>Classe</h1>
                    <h1>Jogador</h1>
                  </div>
                </form>
                <Card />
              </StyledForms>
            </StyledYellowRectangle>
            <StyledYellowRectangleShift>
              <h1>Turno</h1>
              <CardShift />
            </StyledYellowRectangleShift>
            <StyledYellowRectangleGame>
              <h1>Game</h1>
              <CardGame />
            </StyledYellowRectangleGame>
          </StyledCardDiv>
          <StyledButtonPlus>
            <FaPlusCircle size="5rem" />
          </StyledButtonPlus>
          <StyledButtonGear>
            <GoGear size="5rem" />
          </StyledButtonGear>
          <StyledButtonDice>
            <BsFillDice6Fill size="5rem" />
          </StyledButtonDice>
          <StyledButtonLogin>
            <BiUserCircle size="5rem" />
          </StyledButtonLogin>
        </StyledCard>
      </Cards>
    </>
  );
};

export default CardScreen;
