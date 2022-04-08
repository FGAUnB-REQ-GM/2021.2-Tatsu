
import api from './api';

const deleteGame = async (token,id) => {
  let response = null;
  console.log(id);
  try {
    response = await api.delete("/game/"+id,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      alert("Jogo deletado com sucesso!!!");
      return response.data;
  } catch (error) {
    alert("Falha ao deletar o jogo!!!");
    return false;
  }
};

export default deleteGame;
