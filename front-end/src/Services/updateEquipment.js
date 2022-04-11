import api from './api';

const updateEquipment = async (token,id,data) => {
  let response = null;
  try {
    response = await api.put("/equipment/"+id,data,
      { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao atualizar o equipamento")
    return false;
  }
};

export default updateEquipment;