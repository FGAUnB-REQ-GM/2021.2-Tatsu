
import api from './api';

const readGames = async (token) => {
  let response = null;
  try {
    response = await api.get("/games",
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

export default readGames;