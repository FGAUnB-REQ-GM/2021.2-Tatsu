import api from './api';

const deleteCharacter = async (token,id) => {
  let response = null;
  try {
    response = await api.delete("/characterSheet/"+id,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      alert("Personagem deletado com sucesso!!!");
      return response.data;
  } catch (error) {
    alert("Falha ao deletar o personagem!!!");
    return false;
  }
};

export default deleteCharacter;
