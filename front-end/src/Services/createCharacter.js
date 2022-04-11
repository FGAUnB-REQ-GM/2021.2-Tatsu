import api from './api';

const createCharacter = async (token,gameId,playerName,characterName) => {
  let response = null;
  try {
    response = await api.post("/characterSheet",
        {
            gameId:gameId,
            playerName:playerName,
            characterName: characterName,
            class:"",
            race:"",
            background:"",
            alignment:""
        
        },
        { 
        headers: {
          Authorization: `${token}`,
        }
      });
    
    return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao criar sua ficha!")
    return false;
  }
};

export default createCharacter;