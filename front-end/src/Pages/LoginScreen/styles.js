import styled from "styled-components";
export const styles = {};

export const FormLogin = styled.div`
  background-color: #14142c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    img {
      width: 23rem;
      height: 20rem;
      justify-content: center;
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
  height: 2.5rem;
  width: 19.5rem;

  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  button {
    height: 3rem;
    margin: 1rem;
  }
`;
