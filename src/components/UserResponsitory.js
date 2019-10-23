
import Repository from './Responsitory'
//import axios from 'axios';
const resource = '/user'
export default {
  get(){
    return Repository.get(`${resource}`);
  },
  getById (usid) {
    return Repository.get(`${resource}/${usid}`)
  },
  create (user) {
    return Repository.post(`${resource}`, user)
  },
  update (user) {
    return Repository.put(`${resource}`, user)
  },
  delete (usid) {
    return Repository.delete(`${resource}/${usid}`)
  }
}
