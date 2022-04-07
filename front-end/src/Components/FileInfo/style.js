import styled from "styled-components";

export const FileRow = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 2rem;
  width: 94%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 2rem;

  label {
    color: black;
    font-size: 14px;
  }

  #a1 {
    color: black;
  }

  #label1, #label2, #label3 {
    width: 20%;
    text-align: center;
  }

  #button1 {
    margin-left: 30%;
  }

  #button2 {
    margin-left: 0.5rem;
  }
`;
