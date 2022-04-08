import styled from "styled-components";


export const BackgroundModal= styled.div`
    width:100vw;
    height:100vh;
    position:absolute;
    left:0px;
    top:0px;
    display:flex;
    background-color:rgba(0,0,0,0.4);
`;

export const DeleteModalContainer = styled.div`
    margin:auto;
    border-radius:15px;
    border:2px solid white;
    padding:1vw;
    background-color:#14142c;
    display:flex;
    height:25vh;
    width:45vw;
    flex-direction:column;
`;

export const DeleteModalText = styled.h1`
    color:white;
    margin:auto;
`;

export const DeleteModalButtonsDiv = styled.div`
    margin-bottom:0px;
    margin-top:auto;
    width:100%;
    display:flex;
    flex-direction:row;
`;

export const DeleteModalButtons = styled.button`
    color:white;
    font-size: 1rem;
    font-weight:bold;
    border-radius:10px;
    border:2px solid white;
    padding:1vw;
    background-color:#F2B10C;
    margin-right:1vw;
    text-allign:center;
    cursor:pointer;
`;