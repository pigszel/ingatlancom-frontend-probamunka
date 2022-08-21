import { updateStorageItem } from './../../../utilities/storage'

export default {
  addToFavourites(state, { item }) {
    if (!state.favourites.find((fav) => fav.adId === item.adId)) {
      state.favourites.push(item)

      updateStorageItem({
        key: 'favourites',
        value: JSON.stringify(state.favourites),
      })
    }
  },

  removeFromFavourites(state, { item }) {
    state.favourites = [...state.favourites].filter(
      (fav) => fav.adId !== item.adId
    )
    updateStorageItem({
      key: 'favourites',
      value: JSON.stringify(state.favourites),
    })
  },
}
