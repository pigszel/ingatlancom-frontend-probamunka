const storagePrefix = 'ingatlancomFrontendProbafeladat_'

export const getStorageItem = ({ key } = {}) => {
  return window.localStorage.getItem(`${storagePrefix}${key}`)
}

export const updateStorageItem = ({ key, value } = {}) => {
  window.localStorage.setItem(`${storagePrefix}${key}`, value)
}
