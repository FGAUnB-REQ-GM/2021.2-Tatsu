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
      alert("Logado com sucesso!!!")
    }
    else{
      alert("Não foi possível confirmar o usuário!")
    }
    return response.data;
  } catch (error) {
    alert("Não foi possível confirmar o usuário!")
    return false;
  }
};

export default login;
