
import userresponsitory from '../impl/userresponsitory'
const responsitories = {
  user: userresponsitory
}
export default {
  get: name => responsitories[name]
}
