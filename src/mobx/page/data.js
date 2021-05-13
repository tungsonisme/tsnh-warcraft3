import { makeAutoObservable } from "mobx"

export const EnumPage = {
  Home: 1,
  Options: 2,
  Summary: 3,
  Experience: 4,
}

class Data {
  page = EnumPage.Home
  withDelay = true

  constructor() {
    makeAutoObservable(this)
  }

  _changePage = (page, withDelay) => {
    this.page = page
    this.withDelay = withDelay
  }
}

const pageStore = new Data()

export default pageStore
