import styled from "styled-components";
export const styles = {};

export const FilesBody = styled.div`
  background-color: #14142c;
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;

  img {
    width: 23rem;
    height: 20rem;
  }
`;

export const FilesBox = styled.div`
  height: 100vh;
  width: 90vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  #l0 {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.75rem;
  }

`;

export const Box = styled.div`
  height: 70vh;
  width: 70vw;
  border-radius: 1rem;
  background-color: #F2B10C;
  margin-top: 1rem;
  margin-bottom: 1rem;

  #colName {
    padding-top: 1rem;
    margin-left: 2rem;
    width: 90%;
  }

  #l1, #l2, #l3, #l4 {
    font-family: 'Roboto', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  #l2{
    margin-left: 6.5rem;
  }

  #l1 {
    margin-left: 3.5rem;
  }

  #l3 {
    margin-left: 6rem;
  }

  #l4 {
    margin-left: 2.5rem;
  }

  #fileScroll {
    height: 84%;
    width: 98%;
    overflow-y: scroll;
  }

  #fileScroll::-webkit-scrollbar {
    width: 20px;
  }
  
  #fileScroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  #fileScroll::-webkit-scrollbar-thumb {
    background: #878787; 
    border-radius: 10px;
  }
  
  #fileScroll::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
  }
`;


export const StyledDiv = styled.div`
  background-color: #14142c;
  height: 5vw;
  width: 100vw;
  cursor: pointer;
  

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  align-itens: center;
  display: flex;
  justify-content: space-between;
  button {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
    height: 2.5rem;
    width: 2.5rem;
  }
`;
