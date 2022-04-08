import React, { useEffect } from "react";
import Logo from "../../Assets/logo.svg";
import Card from "../../Components/Card";
import MainButton from "../../Components/MainButton";
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
  StyledTitle,
} from "./styles";

const CardScreen = () => {
  return (
    <>
      <Cards>
        <img src={Logo} alt="Logo" />
        <StyledTitle>Fichas</StyledTitle>
        <StyledCard>
          <StyledCardDiv>
            <StyledYellowRectangle>
              <StyledForms>
                <form>
                  <div className="form-div">
                    <h1>Nome do Personagem</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Nome do Personagem"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Habilidade</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Habilidade"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Resistência</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Resistência"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Armadura</h1>
                    <input id="cityInput" type="text" placeholder="Armadura" />
                  </div>
                  <div className="form-div">
                    <h1>Pontos de Vida</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Pontos de Vida"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Pontos de Mágica</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Pontos de Mágica"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Pontos de Experiência</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Pontos de Experiência"
                    />
                  </div>
                  <div className="form-div">
                    <h1>Pontos de Força</h1>
                    <input id="cityInput" type="text" placeholder="Força" />
                  </div>
                </form>
                  <MainButton
                    className="b1"
                    title={"Cancelar"}
                    type="button"
                    onClick={() => window.history.back()}
                  />
                  <MainButton title={"Editar"} />
              </StyledForms>
            </StyledYellowRectangle>
          </StyledCardDiv>
        </StyledCard>
      </Cards>
    </>
  );
};

export default CardScreen;
