import api from './api';

const updateAttacksSpellcasting = async (token,id,data) => {
  let response = null;
  try {
    response = await api.put("/attacksAndSpellcasting/"+id,data,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao atualizar o ataque")
    return false;
  }
};

export default updateAttacksSpellcasting;