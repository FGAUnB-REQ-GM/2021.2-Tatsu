import api from './api';

const createGame = async (token,name) => {
  let response = null;
  try {
    response = await api.post("/game",
        {
            name:name
        },
        { 
        headers: {
          Authorization: `${token}`,
        }
      });
    
    return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao criar seu ficheiro!")
    return false;
  }
};

export default createGame;