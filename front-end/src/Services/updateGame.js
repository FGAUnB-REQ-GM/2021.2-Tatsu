import api from './api';

const updateGame = async (token,id,name) => {
  let response = null;
  try {
    response = await api.put("/game/"+id,{
        name:name
      },
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao atualizar o ficheiro")
    return false;
  }
};

export default updateGame;