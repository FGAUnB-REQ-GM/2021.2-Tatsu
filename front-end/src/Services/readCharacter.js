import api from './api';

const readCharacter = async (token,id) => {
  let response = null;
  try {
    response = await api.get("/characterSheet/"+id,
        { 
        headers: {
          Authorization: `${token}`,
        }
      });
      return response.data;
  } catch (error) {
    return false;
  }
};

export default readCharacter;