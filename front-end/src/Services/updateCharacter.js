import api from './api';

const updateCharacter = async (token,id,data) => {
  let response = null;
  try {
    response = await api.put("/characterSheet/"+id,data,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao atualizar a ficha")
    return false;
  }
};

export default updateCharacter;