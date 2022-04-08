
import api from './api';

const readGame = async (token,id) => {
  let response = null;
  try {
    response = await api.get("/game/"+id,
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

export default readGame;