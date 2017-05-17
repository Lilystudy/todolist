/**
 * Created by Administrator on 2017/5/16.
 */
const STORAGE_KEY = 'items'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem('[]'))
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
