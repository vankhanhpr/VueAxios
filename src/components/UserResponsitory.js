
import Reponsitory from './Responsitory'

const resource = '/user'
export default {
  get(){
	console.log('da toi day1')
    return Reponsitory.get(`${resource}`)
  },
  getById (usid) {
    return Reponsitory.get(`${resource}/${usid}`)
  },
  create (user) {
    return Reponsitory.post(`${resource}`, user)
  },
  update (user) {
    return Reponsitory.put(`${resource}`, user)
  },
  delete (usid) {
    return Reponsitory.delete(`${resource}/${usid}`)
  }
}
