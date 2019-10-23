
import Repository from './Responsitory'
import axios from 'axios';
const resource = '/user'
export default {
  get(){
    //console.log(Repository.get(`${resource}`))
    return Repository.get('/posts');
    // axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/posts'
    // })
    // .then(function (response) {
    //   console.log(response)
    // });
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
