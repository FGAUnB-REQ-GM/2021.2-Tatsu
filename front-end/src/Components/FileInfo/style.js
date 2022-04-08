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
  padding-left:0.5vw;

  label {
    color: black;
    font-size: 14px;
  }

  #a1 {
    color: black;
  }

  #label1, #label2, #label3 {
    text-align: center;
  }
  
  #label1{
    display:inline-block;
    width: 20vw;
  }

  #label2{
    display:inline-block;
    width: 13vw;
  }

  #label3{
    display:inline-block;
    width: 10vw;
  }

  #button1 {
    margin-left:auto;
    margin-right: 0.5rem;
  }

  #button2 {
    margin-right: 2rem;
  }
`;

