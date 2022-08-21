import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const initialState = {
  favourites: [],
}

let state = JSON.parse(JSON.stringify(initialState))

const store = {
  state,
  actions,
  getters,
  mutations,
}

export default store
