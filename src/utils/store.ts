import { localStorePrefix } from '../config'
type storeType = object | string

export default class Store {
  constructor(private prefix = localStorePrefix) {}

  computeFieldName(field: string) {
    return this.prefix + field
  }

  set(field: string, data: storeType) {
    localStorage.setItem(this.computeFieldName(field), JSON.stringify(data))
  }

  get(field: string) {
    const computedField = this.computeFieldName(field)
    const storedItem = localStorage.getItem(computedField)

    return this.exists(field) && storedItem ? JSON.parse(storedItem) : null
  }

  exists(field: string) {
    return !!localStorage.getItem(this.computeFieldName(field))
  }

  clear() {
    Object.keys(localStorage).forEach((el) => {
      if (el.indexOf(this.prefix) === 0) {
        localStorage.removeItem(el)
      }
    })
  }
}
