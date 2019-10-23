
import axios from 'axios';
const baseDomain = 'https://localhost:44370';
const baseUrl = `${baseDomain}/api`;
//const baseUrl =  'https://jsonplaceholder.typicode.com' 
const instance = axios.create({
  baseURL:baseUrl
});
export default instance;