export default {
  addToFavourites({ state, commit }, { item }) {
    commit('addToFavourites', { item })
  },

  removeFromFavourites({ state, commit }, { item }) {
    commit('removeFromFavourites', { item })
  },
}
