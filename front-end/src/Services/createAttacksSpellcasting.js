import api from './api';

const createAttacksSpellcasting = async (token,data) => {
  let response = null;
  try {
    response = await api.post("/attacksAndSpellcasting",
        data,
        { 
        headers: {
          Authorization: `${token}`,
        }
      });
    
    return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao criar seu ataque!")
    return false;
  }
};

export default createAttacksSpellcasting;