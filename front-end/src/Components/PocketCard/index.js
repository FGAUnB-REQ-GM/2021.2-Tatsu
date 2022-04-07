import React from "react";
import {FaPlayCircle, FaEdit, FaTrash} from 'react-icons/fa';
import { StyledBigDiv } from "./styles";

const PocketDocument = () => (
  <StyledBigDiv>
    <button class="card">Ficha 1</button>
    <button class="classe">Mago</button>
    <button class="player">João</button>
    <button class="play-circle"><FaPlayCircle /></button>
    <button class="edit"><FaEdit /></button>
    <button class="trash"><FaTrash /></button>

  </StyledBigDiv>
);

export default PocketDocument;
