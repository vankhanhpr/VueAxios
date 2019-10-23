
import axios from 'axios';
const baseDomain = 'https://localhost:44370';
//const baseUrl = `${baseDomain}/api`; //'https://localhost:44370' //
//const baseUrl =  'https://localhost:44370/api' 
export default axios.create({
  baseUrl:'https://jsonplaceholder.typicode.com',
  timeout: 1000,
})