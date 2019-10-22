
import axios from 'axios'
const baseDomain = 'https://localhost:44370'
const baseUrl = 'https://localhost:44370' //`${baseDomain}/api`
export default axios.create({
  baseUrl
})
