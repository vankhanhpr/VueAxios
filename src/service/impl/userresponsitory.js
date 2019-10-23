
import responsitory from '../reponsitory/responsitory'
//import axios from 'axios';
const resource = '/user'
export default {
  get(){
    return responsitory.get(`${resource}`);
  },
  getById (usid) {
    return responsitory.get(`${resource}?id=${usid}`)
  },
  create (user) {
    return responsitory.post(`${resource}`, user)
  },
  update (user) {
    return responsitory.put(`${resource}`, user)
  },
  delete (usid) {
    return responsitory.delete(`${resource}/${usid}`)
  }
}
