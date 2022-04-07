import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const styles = {};

export const Cards = styled.div`
  background-color: #14142c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  label {
    position: absolute;
    top: 4rem;
    left: 58rem;
    color: ${colors.white};
    font-weight: bold;
    margin-bottom: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 36px;
  }

  img {
    width: 23rem;
    height: 20rem;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledCardDiv = styled.div`
  justify-content: center;
  display: flex;
  width: 80rem;
  height: 70vh;
  padding-bottom: 4rem;
`;

export const StyledButtonPlus = styled.div`
  justify-content: center;
  display: flex;
  width: 60rem;
  color: #f2b10c;
  cursor: pointer;
`;

export const StyledButtonGear = styled.div`
  position: absolute;
  left: 127.5rem;
  margin-top: 6rem;
  color: #f2b10c;
  cursor: pointer;
`;

export const StyledButtonDice = styled.div`
  position: absolute;
  left: 127.5rem;
  margin-top: 12rem;
  color: #f2b10c;
  cursor: pointer;
`;

export const StyledButtonLogin = styled.div`
  position: absolute;
  left: 1rem;
  margin-top: 60rem;
  color: #f2b10c;
  cursor: pointer;
`;

export const StyledYellowRectangle = styled.div`
  width: 60%;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.primary};
`;

export const StyledYellowRectangleShift = styled.div`
  position: absolute;
  width: 33rem;
  overflow-y: scroll;
  left: 90rem;
  height: 18rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.primary};

  h1 {
    text-align: center;
    font-family: ${fonts.font};
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 33px;
    color: ${colors.white};
    margin: 1rem 0rem 0rem 1rem;
    display: inline-block;
  }
`;

export const StyledYellowRectangleGame = styled.div`
  position: absolute;
  overflow-y: scroll;
  width: 46rem;
  left: 90rem;
  height: 34.5rem;
  margin-top: 20rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.primary};

  h1 {
    text-align: center;
    font-family: ${fonts.font};
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 33px;
    color: ${colors.white};
    margin: 1rem 0rem 0rem 1rem;
    display: inline-block;
  }
`;

export const StyledForms = styled.div`
  padding-bottom: 4rem;
  form {
    margin-left: auto;
    .form-div {
      box-sizing: border-box;
      h1 {
        text-align: left;
        font-family: ${fonts.font};
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 33px;
        color: ${colors.white};
        margin: 1rem 5rem 0rem 1rem;
        display: inline-block;
      }
      select {
        width: 72%;
        height: 2rem;
        background: ${colors.white};
        padding-left: 0.5rem;
        border-radius: ${radius.sizeSm};
        border: 2px solid ${colors.black};
        outline: none;
        cursor: pointer;
        ::placeholder {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: ${fonts.sizeLg};
          line-height: 33px;
          opacity: 0.7;
        }
      }
      button {
        width: 72%;
        height: 2rem;
        background: ${colors.white};
        padding: 0.55rem 0rem 1.55rem 1rem;
        align-items: center;
        border-radius: ${radius.sizeSm};
        border: 2px solid ${colors.black};
        text-align: left;
        cursor: pointer;
        svg {
          font-size: 18px;
          line-height: 33px;
        }
      }
    }
  }
`;

export const StyledCreateButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  margin-left: 2rem;
  font-family: ${fonts.font};
  font-style: normal;
  font-weight: bold;
  font-size: ${fonts.sizeXlg};
  line-height: 20px;
  text-align: center;
  color: ${colors.white};
  border: none;
  border-radius: ${radius.sizeMd};
  background: ${colors.primary};
  cursor: pointer;
`;
