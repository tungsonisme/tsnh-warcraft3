import { makeAutoObservable } from "mobx"

export const EnumPage = {
  Home: 1,
  Options: 2,
  Summary: 3,
}

class Data {
  page = EnumPage.Home

  constructor() {
    makeAutoObservable(this)
  }

  _changePage = (page) => {
    this.page = page
  }
}

const pageStore = new Data()

export default pageStore
