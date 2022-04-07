import api from './api';

const login = async (username, password) => {
  let response = null;
  try {
    response = await api.get("/login",
      { 
        auth: { 
          "username":username,
           "password":password 
        } 
      });

    if (response.data.token) {
      localStorage.setItem('userToken', `Bearer ${response.data.token}`);
      localStorage.setItem('userTokenExpiration', response.data.expiration);
    }
    return response.data;
  } catch (error) {
    return false;
  }
};

export default login;
