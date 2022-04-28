import styled from "styled-components";
export const styles = {};

export const FilesBody = styled.div`
  background-color: #14142c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const FilesBox = styled.div`
  height: 100vh;
  width: 80vw;
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
    text-align:center;
  }
  
  #l1 {
    display:inline-block;
    width: 20vw;
  }

  #l2{
    display:inline-block;
    width: 13vw;
  }


  #l3 {
    display:inline-block;
    width: 10vw;
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
  cursor: pointer;
  position:fixed;
  right:3vw;
  bottom:3vh;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  align-items: center;
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
