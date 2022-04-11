import api from './api';

const createEquipment = async (token,data) => {
  let response = null;
  try {
    response = await api.post("/equipment",
        data,
        { 
        headers: {
          Authorization: `${token}`,
        }
      });
    
    return response.data;
  } catch (error) {
    alert("Ocorreu algum erro ao criar seu equipamento!")
    return false;
  }
};

export default createEquipment;