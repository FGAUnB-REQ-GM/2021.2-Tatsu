    
import { create } from 'axios';

const api = create({
  baseURL: 'http://localhost:5050/',
});

export default api;