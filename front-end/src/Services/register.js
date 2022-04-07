import api from './api';

const register = async (username,email,password) => {
  let response = null;
  try {
    response = await api.post("/register",
        {
            username:username,
            email:email,
            password:password
        }
      );
      if (response.data.token) {
        localStorage.setItem('userToken', `Bearer ${response.data.token}`);
        localStorage.setItem('userTokenExpiration', response.data.expiration);
        alert("Cadastro realizado com sucesso!!!")
      }
      else{
          alert("Ocorreu algum erro ao cadastrar o usuário!")
      }
      return response.data;
  } catch (error) {
    return false;
  }
};

export default register;