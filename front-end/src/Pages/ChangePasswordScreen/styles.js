import styled from "styled-components";
export const styles = {};

export const FormRegister = styled.div`
  background-color: #14142c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 23rem;
    height: 20rem;
  }
  form {
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Roboto", sans-serif;
      font-size: 30px;
      color: #ffffff;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    a {
      color: #ffff;
      height: 3em;
      width: 23rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  }
`;

export const StyledDiv = styled.div`
  height: auto;
  width: 100%;

  cursor: pointer;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  button {
    font-family: "Roboto", sans-serif;
    height: 2rem;
    width: 11rem;
    font-size: 20px;
  }
`;
