
import UserResponsitory from './UserResponsitory'
const responsitories = {
  user: UserResponsitory
}
export default {
  get: name => responsitories[name]
}
// export const ResponsitoryFactory = {
//   get: name => responsitories[name]
// }
