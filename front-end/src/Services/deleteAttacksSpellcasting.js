import api from './api';

const deleteAttacksSpellcasting = async (token,id) => {
  let response = null;
  try {
    response = await api.delete("/attacksAndSpellcasting/"+id,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    alert("Falha ao deletar o Ataque!!!");
    return false;
  }
};

export default deleteAttacksSpellcasting;
