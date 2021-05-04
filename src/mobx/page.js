import { makeAutoObservable } from "mobx"

export const EnumPage = {
  Home: 1,
  Options: 2,
}

class Page {
  page = EnumPage.Home

  constructor() {
    makeAutoObservable(this)
  }

  changePage = (page) => {
    this.page = page
  }
}

const pageStore = new Page()

export default pageStore
